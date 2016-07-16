(function () {

    angular
        .module('myApp.component.customerLogin', [])
        .component('customer-login', {
            templateUrl: 'components/customer-login/customer-login.html',
            controller: ('CustomerLoginComponent', CustomerLoginComponent),
            controllerAs: 'clogin'
        });

    CustomerLoginComponent.$inject = [];

    function CustomerLoginComponent() {
        var vm = this;

    }
})();