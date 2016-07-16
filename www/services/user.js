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
            /*
            return $http({
                method: 'POST',
                withCredentials: true,
                url: 'server' + "/login" + requestData
            }).then(function (response) {
                return response;
            })*/
        }
    }
})();