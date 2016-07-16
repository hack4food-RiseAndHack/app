(function () {
    /**
     * @ngdoc function
     * @name yoobiApp.controller:MenuFeaturedCtrl
     * @description
     * # MenuFeaturedCtrl
     * Controller of the yoobiApp
     */
    function ClientMenuPageCtrl($state) {

        this.state = $state.current.name;
        console.log("state", this.state);
    };
    angular.module('myApp')
        .controller('ClientMenuPageCtrl', [
            '$state',
            ClientMenuPageCtrl]);
})();


