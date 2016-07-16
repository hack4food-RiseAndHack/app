(function(window, angular, undefined) {
    'use strict';
    /**
     * @ngdoc function
     * @name yoobiApp.controller:MenuFeaturedCtrl
     * @description
     * # MenuFeaturedCtrl
     * Controller of the yoobiApp
     */
    function qrScanCtrl() {

        var vm = this;

        $yoobiData.getFeatured({ /* no query neccessary */ }, function(res) {
            vm.item = res;
        });

    };
    angular.module('starter')
        .controller('qrScanCtrl',
            qrScanCtrl);
})(window, window.angular);


