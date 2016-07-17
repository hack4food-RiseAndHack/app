(function () {

    angular
        .module('myApp.merchant', ['ionic'])
        .controller('MerchantMain', MerchantMain);

    MerchantMain.$inject = ['Resources', '$location', 'LoginService', '$window', 'User'];

    function MerchantMain(Resources, $location, LoginService, $window, User) {
        var vm = this;
        
        vm.checkUser = checkUser;
        vm.logout = logout;
        vm.createPayment = createPayment;
        vm.account = account;
        
        function checkUser() {
            if (typeof Resources.getMerchantUserSession() == 'undefined') {
                $location.path('/login');
                $window.location.reload();
            } else {
                LoginService.checkUser(Resources.getMerchantUserSession()).then(function (val) {
                    if (!val.success) {
                        $location.path('/login');
                        $window.location.reload();
                    } else {
                        User.getUserData(Resources.getMerchantUserSession()).then(function (val) {
                            Resources.setUserData(val);
                            if (val.accountNumber){
                                vm.accountNumber = true;
                            }
                        })
                    }
                })
            }
        }

        function account() {
            $location.path('/merchant/info');
        }

        function logout() {
            Resources.destroyMerchantUserSession();
            $location.path('/login');
            $window.location.reload();
        }
    }
})();