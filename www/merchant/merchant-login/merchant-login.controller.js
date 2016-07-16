(function () {

    angular
        .module('myApp.merchantLogin', ['ionic'])
        .controller('MerchantLoginController', MerchantLoginController);

    MerchantLoginController.$inject = ['LoginService', '$location'];

    function MerchantLoginController(LoginService, $location) {
        var vm = this;
        var requestData;

        vm.login = login;
        vm.register = register;
        vm.back = back;
        vm.paysera = paysera;

        function login() {
            requestData = {
                username: vm.username,
                password: vm.password
            };

            if (validation()) {
                LoginService.login(requestData).then(function (val) {
                    console.log(val);
                }).catch(function (val) {
                    console.log(val);
                });
            }
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
            return !(!vm.username || !vm.password);
        }
    }
})();