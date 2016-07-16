(function () {

    angular
        .module('myApp.merchantLogin', ['ionic'])
        .controller('MerchantLoginController', MerchantLoginController);

    MerchantLoginController.$inject = ['LoginService', '$location', 'Resources'];

    function MerchantLoginController(LoginService, $location, Resources) {
        var vm = this;
        var requestData;

        vm.login = login;
        vm.register = register;
        vm.back = back;
        vm.paysera = paysera;

        function login() {
            vm.loader = true;

            requestData = {
                username: vm.username,
                password: vm.password
            };

            if (validation()) {
                LoginService.login(requestData).then(function (val) {
                    Resources.setMerchantUserSession(val.token);
                    $location.path('/merchant/main');
                    vm.showErrorMessage = false;
                    vm.errorMessage = 'Bad credentials';
                    vm.loader = false;
                }).catch(function (val) {
                    vm.loader = false;
                    vm.errorMessage = 'Bad credentials';
                    vm.showErrorMessage = true;
                });
            } else vm.loader = false;
        }

        function register() {
            $location.path('/merchant/register');
        }

        function paysera() {

        }

        function back() {
            $location.path('/login');
        }

        function validation() {
            if (!vm.username){
                vm.errorMessage = 'Please enter username';
                vm.showErrorMessage = true;
                return false;
            } else if (!vm.password){
                vm.errorMessage = 'Please enter password';
                vm.showErrorMessage = true;
                return false;
            }
            vm.showErrorMessage = false;
            vm.errorMessage = '';
            return true;
        }
    }
})();