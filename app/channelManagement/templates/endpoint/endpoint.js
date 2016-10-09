app.controller("channelManagementEndpoint", ["C2CData", "$scope", "channelDashboard", function (C2CData, $scope, channelDashboard) {

    var self = this;
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
    
    self.rootId = typeof(C2CData.get()) == "number" ? C2CData.get() : 0;
    channelDashboard.getData().then(function (answer) {
        self.data = answer.data[self.rootId]
    })
    
    self.activeAgents = "2545";
    self.openCases = "235";
    self.blockedFiles = "254";
    self.sanitizedFiles = "387";
}])
