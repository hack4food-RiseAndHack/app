(function () {

    angular
        .module('myApp.login', ['ionic'])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService', '$location'];

    function LoginController(LoginService, $location) {
        var vm = this;
        var requestData;

        vm.loginMerchant = loginMerchant;
        
        function loginMerchant() {
            $location.path('/merchant');
        }

        function validation() {
            return !(!vm.email || !vm.password);
        }
    }
})();