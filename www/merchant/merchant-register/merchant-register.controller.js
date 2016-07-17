(function () {

    angular
        .module('myApp.merchantRegister', ['ionic'])
        .controller('MerchantRegisterController', MerchantRegisterController);

    MerchantRegisterController.$inject = ['LoginService', '$location'];

    function MerchantRegisterController(LoginService, $location) {
        var vm = this;
        var requestData;

        vm.back = back;
        vm.register = register;
        
        function register() {
            if (validation()){
                requestData = {
                    email: vm.email,
                    password: vm.password,
                    username: vm.username
                };

                LoginService.register(requestData).then(function (val) {
                    if (val.success) {
                        $location.path('/merchant');
                        vm.showErrorMessage = false;
                        errorMessage('');
                    } else {
                        errorMessage('User already exists');
                        vm.showErrorMessage = true;
                    }
                })
            }
        }

        function validation() {
            if (!vm.username){
                errorMessage('Please enter username');
                return false;
            } else if (!vm.email){
                errorMessage('Please enter your email');
                return false;
            } else if (!vm.password){
                errorMessage('Please enter password');
                return false;
            } else if (vm.password != vm.confirmPassword){
                errorMessage('Confirm password does not match');
                return false;
            }
            errorMessage('');
            vm.showErrorMessage = false;
            return true;
        }

        function errorMessage(text) {
            vm.errorMessage = text;
            vm.showErrorMessage = true;
        }
        
        function back() {
            $location.path('/merchant');
        }
    }
})();