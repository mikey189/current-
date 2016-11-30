app.controller('common', function ($rootScope) {


	var self = this;
	$rootScope.timeFrame = ["Real Time", "1 Hour", "1 Day", "1 Week", "1 Month"];
	self.space = " "
	self.timeFrame = ["Real Time", "1 Hour", "1 Day", "1 Week", "1 Month"]


})

app.run(['$rootScope', '$state', '$stateParams',
	function ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}



])