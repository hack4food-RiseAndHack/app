(function () {

    angular
        .module('myApp.login', ['ionic'])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location'];

    function LoginController($location) {
        var vm = this;

        vm.loginMerchant = loginMerchant;
        
        function loginMerchant() {
            $location.path('/merchant');
        }
    }
})();