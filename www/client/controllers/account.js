(function () {
    
    function clientAccountCtrl($cordovaBarcodeScanner, $state, $http) {

    	console.log("TEST");

    	this.token = window.localStorage.getItem("merchant");

    	if(this.token === "undefined")
    		$state.go("main");

    	this.qrScanner = function() {
    		console.log("test");
        	$cordovaBarcodeScanner.scan().then(
	            function(data) {
	                //self.transCheck(data, token);
	                //alert(data.text);

	                $http.get('http://193.219.91.103:5000/transaction/'+data.text+'?token=' + this.token)
	                .then(function (response) {
	                   alert("res: ", response);
	                },
	                function (err) {
	                   alert("err", err);
	                });


	            },
	            function(error) {
	                alert("Scanning failed: " + error);
	            }, {
	                "preferFrontCamera": true, // iOS and Android
	                "showFlipCameraButton": true, // iOS and Android
	                "prompt": "Place a barcode inside the scan area", // supported on Android only
	                "formats": "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
	                "orientation": "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
	            }
	        )
	    };

	    this.logout = function() {
	    	window.localStorage.removeItem('merchant');
	    	$state.go("main");
	    };

    };
    angular.module('myApp')
        .controller('clientAccountCtrl', ['$cordovaBarcodeScanner', '$state', '$http',
            clientAccountCtrl]);

})();
