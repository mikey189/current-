app.controller('common', function ($rootScope, $state, $stateParams) {

	var self = this;
	$rootScope.timeFrame = ["Real Time", "1 Hour", "1 Day", "1 Week", "1 Month"];
	self.timeFrame = ["Real Time", "1 Hour", "1 Day", "1 Week", "1 Month"]
	self.$state = $state
	self.token = localStorage.getItem("token");
	self.serverName = localStorage.getItem("serverName")


})

app.run(['$rootScope','$http', '$state', '$stateParams',
	function ($rootScope,$http, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams
		//injecting token inside common headers for $http call
		var token = localStorage.getItem("token")
		console.log(token)
		$http.defaults.headers.common.Authorization = token

	}

])