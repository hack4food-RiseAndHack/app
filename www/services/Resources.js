(function () {
    "use strict";
    angular
        .module("myApp")
        .factory("Resources", Resources);

    Resources.$inject = ['$cookies'];

    function Resources($cookies) {
        var resources = {
            checkUser: checkUser,
            setMerchantUserSession: setMerchantUserSession,
            getMerchantUserSession: getMerchantUserSession,
            destroyMerchantUserSession: destroyMerchantUserSession,
            setClientUserSession: setClientUserSession,
            getClientUserSession: getClientUserSession,
            destroyClientUserSession: destroyClientUserSession,
            setUserData: setUserData,
            getUserData: getUserData
        };
        return resources;

        var userData = null;

        function setUserData(val) {userData = val;}
        function getUserData() {return userData;}

        function setMerchantUserSession(val) {$cookies.put('merchant', val);}
        function getMerchantUserSession() {return $cookies.get('merchant');}
        function destroyMerchantUserSession() {$cookies.remove('merchant');}

        function setClientUserSession(val) {$cookies.put('client', val);}
        function getClientUserSession() {return $cookies.get('client');}
        function destroyClientUserSession() {$cookies.remove('client');}

        function checkUser() {

            if (getMerchantUserSession() == null && getClientUserSession() == null)
                return false;

            if (getMerchantUserSession())
                return 'merchant';

            if (getClientUserSession())
                return 'client';
        }
    }
})();