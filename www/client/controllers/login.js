(function () {
    
    function clientLoginCtrl($state, LoginService, Resources) {
    	var self = this;

    	this.token = window.localStorage.getItem("merchant");
    	console.log("this.token ", this.token);
    	if(this.token !== "undefined")
    		$state.go("client.account");


    	this.paysera = function() {
            self.loader = true;

            requestData = {
                username: self.username,
                password: self.password
            };

            if (validation()) {
                LoginService.login(requestData).then(function (val) {
                    Resources.setMerchantUserSession(val.token);
                    $state.go('client.account');
                    self.showErrorMessage = false;
                    self.errorMessage = '';
                    self.loader = false;
                }).catch(function (err) {
                	console.log("err ", err);
                    self.loader = false;
                    self.errorMessage = 'Bad credentials';
                    self.showErrorMessage = true;
                });
            } else self.loader = false;
    	};

    	function validation() {
            if (!self.username){
                self.errorMessage = 'Please enter username';
                self.showErrorMessage = true;
                return false;
            } else if (!self.password){
                self.errorMessage = 'Please enter password';
                self.showErrorMessage = true;
                return false;
            }
            self.showErrorMessage = false;
            self.errorMessage = '';
            return true;
        }

    	this.back = function() {
	    	$state.go("main");
	    };
    };
    angular.module('myApp')
        .controller('clientLoginCtrl', ['$state', 'LoginService', 'Resources',
            clientLoginCtrl
        ]);

})();
