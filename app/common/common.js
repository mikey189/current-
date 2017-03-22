app.controller('common', function ($rootScope, $state, $stateParams, $mdMenu) {

	var self = this;
	$rootScope.timeFrame = ["Real Time", "1 Hour", "1 Day", "1 Week", "1 Month"];
	self.timeFrame = ["Real Time", "1 Hour", "1 Day", "1 Week", "1 Month"]
	self.$state = $state
	self.token = localStorage.getItem("token");
	self.serverName = localStorage.getItem("serverName")

	var IsUserSOB = localStorage.getItem("ISSOB");
	self.IsUserSOB = (IsUserSOB === "true") ? true : false;

	self.openMenu = ($mdMenu, ev) => {
		originatorEv = ev;
		$mdMenu.open(ev);
	};
	self.notifications = JSON.parse(localStorage.getItem("notifications")) || [];
	self.notificationsLength = self.notifications.length;

})