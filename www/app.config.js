angular.module('myApp', [
    'ionic',
    'myApp.controller',
    'myApp.login',
    'myApp.merchant',
    'myApp.component.customerLogin'
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
    });

    $urlRouterProvider.otherwise('/login');
});
