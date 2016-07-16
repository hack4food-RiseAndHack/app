(function () {
    "use strict";
    angular.module("myApp")
        .factory("User", User);

    User.$inject = ['$http'];

    function User($http) {
        var service = {
            login: Login,
            register: Register
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
                    return response;
                });
        }
    }
})();