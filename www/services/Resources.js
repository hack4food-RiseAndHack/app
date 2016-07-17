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

        function setMerchantUserSession(val) { window.localStorage.setItem('merchant', val);}
        function getMerchantUserSession() {return window.localStorage.getItem('merchant');}
        function destroyMerchantUserSession() {window.localStorage.removeItem('merchant');}

        function setClientUserSession(val) {window.localStorage.setItem('merchant', val);}
        function getClientUserSession() {return window.localStorage.getItem('merchant');}
        function destroyClientUserSession() {window.localStorage.removeItem('merchant');}

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