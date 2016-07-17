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
            setClientUserSession: setClientUserSession,
            getClientUserSession: getClientUserSession,
            setUserData: setUserData,
            getUserData: getUserData
        };
        return resources;

        var userData = null,
            merchantUserSession = null,
            clientUserSession = null;

        function setUserData(val) {userData = val;}
        function getUserData() {return userData;}

        function setMerchantUserSession(val) {merchantUserSession = val;}
        function getMerchantUserSession() {return merchantUserSession;}

        function setClientUserSession(val) {clientUserSession = val;}
        function getClientUserSession() {return clientUserSession;}

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