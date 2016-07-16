angular.module('myApp', [
    'ionic',
    'myApp.controller',
    'myApp.login',
    'myApp.merchant',
    'myApp.component.customerLogin',
    'myApp.merchantLogin',
    'ngCordova'
])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/login',
            templateUrl: 'login/login.view.html',
            controller: 'LoginController',
            controllerAs: 'login'
        })

        .state('merchant-login', {
            url: '/merchant',
            templateUrl: 'merchant/merchant-login/merchant-login.view.html',
            controller: 'MerchantLoginController',
            controllerAs: 'merchant'
        })

        .state('client', {
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
                    controller: 'paymentCtrl',
                    controllerAs: 'payment'
                }
            }
        })
        .state('client.account', {
            url: '/account',
            views: {
                'menuContent': {
                    templateUrl: 'client/views/account.html',
                    controller: 'clientAccountCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('/login');
});
