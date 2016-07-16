function paymentCtrl($cordovaBarcodeScanner, $cordovaInAppBrowser) {
    var self = this;
    var config = {};

    self.qrScanner = function() {
        $cordovaBarcodeScanner.scan().then(
                function(data) {
                    $http.post('/api/payment/', data, config).then(
                        function(res) {

                        },
                        function(err) {

                })
            },
            function(error) {
                alert("Scanning failed: " + error);
            }, {
                "preferFrontCamera": true, // iOS and Android
                "showFlipCameraButton": true, // iOS and Android
                "prompt": "Place a barcode inside the scan area", // supported on Android only
                "formats": "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                "orientation": "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
            })
    };

    this.loginPaysera = function() {
        var options = {
            location: 'yes',
            clearcache: 'yes',
            toolbar: 'no'
        };
        $cordovaInAppBrowser.open('https://sandbox.paysera.com/frontend/oauth?response_type=code&client_id=wkVd93h2uS&redirect_uri=/#/client/account', '_blank', options)

        .then(function(event) {
            alert("test");
        })

        .catch(function(event) {
            // error
        });
    };

};

angular.module('myApp')
    .controller('paymentCtrl',
        paymentCtrl);
