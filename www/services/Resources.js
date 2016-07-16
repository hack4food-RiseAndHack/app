(function () {
    "use strict";
    angular
        .module("myApp")
        .factory("Resources", Resources);

    Resources.$inject = [];

    function Resources() {
        var resources = {
            checkUser: checkUser,
            setMerchantUserSession: setMerchantUserSession,
            getMerchantUserSession: getMerchantUserSession,
            setClientUserSession: setClientUserSession,
            getClientUserSession: getClientUserSession
        };
        return resources;

        var merchantUserSession = null,
            clientUserSession = null;

        function setMerchantUserSession(val) {merchantUserSession = val;}
        function getMerchantUserSession() {return merchantUserSession;}

        function setClientUserSession(val) {clientUserSession = val;}
        function getClientUserSession() {return clientUserSession}

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