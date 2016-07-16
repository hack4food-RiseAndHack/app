(function () {

    angular
        .module('myApp.merchantRegister', ['ionic'])
        .controller('MerchantRegisterController', MerchantRegisterController);

    MerchantRegisterController.$inject = ['LoginService', '$location'];

    function MerchantRegisterController(LoginService, $location) {
        var vm = this;

        vm.back = back;

        function back() {
            $location.path('/merchant');
        }
    }
})();