(function(window, angular, undefined) {
    'use strict';

function config ($stateProvider) {

    $stateProvider
        .state('client', {
            abstract: true,
            url: '/client',
            templateUrl: 'client/views/menu.html',
            controller: 'ClientMenuPageCtrl',
            controllerAs: 'vm'
        })
        .state('client.payment', {
            url: '/payment',
            views: {
                'menuContent': {
                    templateUrl: 'client/views/payment.html',
                    controller: 'paymentCtrl'
                }
            }
        });
}

angular
	.module('myApp.client', [
    ])
    .config(['$stateProvider', config]);
})(window, window.angular);