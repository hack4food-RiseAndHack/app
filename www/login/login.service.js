(function () {
    "use strict";
    angular
        .module('myApp')
        .factory("LoginService", LoginService);

    LoginService.$inject = ['User'];

    function LoginService(User) {
        var service = {
            login: Login,
            register: Registration
        };
        return service;

        function Login(requestData) {
            return User.login(requestData);
        }

        function Registration(requestData) {
            return User.register(requestData);
        }
    }
})();
