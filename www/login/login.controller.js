(function () {

    angular
        .module('myApp.login', ['ionic'])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService'];

    function LoginController(LoginService) {
        var vm = this;
        var requestData;

        vm.login = login;
        
        function login() {
            requestData = {
                email: vm.email,
                password: vm.password
            };

            if (requestData)
                LoginService.login(requestData).then(function (val) {

                });
        }
    }
})();