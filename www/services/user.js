(function () {
    "use strict";
    angular.module("myApp")
        .factory("User", User);

    User.$inject = ['$http', '$httpParamSerializer'];

    function User($http, $httpParamSerializer) {
        var service = {
            login: Login,
            register: Register,
            checkUser: CheckUser,
            getUserData: getUserData,
            updateUser: updateUser,
            createTransaction: CreateTransaction
        };
        return service;

        function Login(requestData) {
            requestData = JSON.stringify({
                username: requestData.username,
                password: requestData.password
            });

            return $http.post('http://193.219.91.103:5000/session', requestData)
                .then(function (response) {
                    return response.data;
                });
        }

        function Register(requestData) {
            requestData = JSON.stringify({
                email: requestData.email,
                username: requestData.username,
                password: requestData.password
            });

            return $http.post('http://193.219.91.103:5000/register', requestData)
                .then(function (response) {
                    return response.data;
                });
        }

        function CheckUser(requestData) {
            return $http.get('http://193.219.91.103:5000/session?token=' + requestData)
                .then(function (response) {
                    return response.data;
                });
        }
        
        function getUserData(requestData) {
            return $http.get('http://193.219.91.103:5000/me?token=' + requestData)
                .then(function (response) {
                    return response.data;
                });
        }

        function updateUser(requestData) {
            var token = $httpParamSerializer({
                token: requestData.token
            });
            requestData = JSON.stringify({
                accountNumber: requestData.accountNumber
            });

            return $http.post('http://193.219.91.103:5000/me?' + token, requestData)
                .then(function (response) {
                    return response.data;
                });
        }

        function CreateTransaction(requestData) {
            var token = $httpParamSerializer({
                token: requestData.token
            });
            requestData = JSON.stringify({
                accountNumber: requestData.accountNumber,
                price: requestData.price
            });

            return $http.post('http://193.219.91.103:5000/open?' + token, requestData)
                .then(function (response) {
                    return response.data;
                })
        }
    }
})();