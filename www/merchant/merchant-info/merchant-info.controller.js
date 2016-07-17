(function () {

    angular
        .module('myApp.MerchantInfo', ['ionic'])
        .controller('MerchantInfo', MerchantInfo);

    MerchantInfo.$inject = ['Resources', '$location', 'LoginService', '$window', 'User'];

    function MerchantInfo(Resources, $location, LoginService, $window, User) {
        var vm = this;

        vm.checkUser = checkUser;
        vm.back = back;
        vm.updateUser = updateUser;

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
                                vm.accountNumber = val.accountNumber;
                                vm.accountNumberSet = true;
                            }
                        })
                    }
                })
            }
        }

        function updateUser() {
            var requestData = ({
                token: Resources.getMerchantUserSession(),
                accountNumber: vm.accountNumber
            });

            User.updateUser(requestData).then(function (val) {
                Resources.getMerchantUserSession().accountNumber = vm.accountNumber;
            })
        }

        function back() {
            $location.path('/merchant/main');
        }
    }
})();