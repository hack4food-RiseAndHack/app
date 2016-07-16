(function () {

    angular
        .module('myApp.merchant', ['ionic'])
        .controller('MerchantMain', MerchantMain);

    MerchantMain.$inject = [];

    function MerchantMain() {
        var vm = this;
    }
})();