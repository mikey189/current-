app.controller('common', function ($rootScope, $state, $stateParams) {

	var self = this;
	$rootScope.timeFrame = ["Real Time", "1 Hour", "1 Day", "1 Week", "1 Month"];
	self.timeFrame = ["Real Time", "1 Hour", "1 Day", "1 Week", "1 Month"]
	self.$state = $state
	self.token = localStorage.getItem("token");
	self.serverName = localStorage.getItem("serverName")


})

app.run(['$rootScope', '$state', '$stateParams',
	function ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams
	}



])