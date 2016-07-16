(function () {

    angular
        .module('myApp.login', ['ionic'])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService', '$location'];

    function LoginController(LoginService, $location) {
        var vm = this;
        var requestData;

        vm.login = login;
        
        function login() {
            requestData = {
                email: vm.email,
                password: vm.password
            };

            if (validation()) {
                LoginService.login(requestData).then(function (val) {
                    if (val.token){
                        $location.path('/merchant');
                    }
                });
            }
        }

        function validation() {
            return !(!vm.email || !vm.password);
        }
    }
})();