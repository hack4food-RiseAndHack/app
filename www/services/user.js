(function () {
    "use strict";
    angular.module("myApp")
        .factory("User", User);

    User.$inject = ['$http'];

    function User($http) {
        var service = {
            login: Login
        };
        return service;

        function Login(requestData) {
            return $http({
                method: 'GET',
                url: 'localhost:5000/session?' + requestData
            }).then(function (response) {
                return response;
            })
        }
    }
})();