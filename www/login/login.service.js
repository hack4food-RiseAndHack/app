(function () {
    "use strict";
    angular
        .module('myApp')
        .factory("LoginService", LoginService);

    LoginService.$inject = ['$httpParamSerializer', 'User'];

    function LoginService($httpParamSerializer, User) {
        var service = {
            login: Login
        };
        return service;

        function Login(requestData) {
            requestData = $httpParamSerializer({
                email: requestData.email,
                password: requestData.password
            });
            
            return User.login(requestData).then(function (val) {
                return val;
            });
        }
    }
})();
