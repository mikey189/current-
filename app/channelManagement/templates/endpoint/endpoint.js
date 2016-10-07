app.controller("channelManagementEndpoint", ["C2CData", "$scope", "channelDashboard", function (C2CData, $scope, channelDashboard) {


    var self = this;
    self.rootId = 0;
    self.rootId = C2CData.get();
    /*watching the value change on the scope
    $scope.$watch(angular.bind(this, function () {
        return this.rootId;
    }), function (newVal) {
        console.log('new index changed to ' + newVal);
    });*/
    channelDashboard.getData().then(function (answer) {
        self.data = answer.data[self.rootId]
       for (i in self.data){
           console.log(self.data[i])
       }
    })
    
    self.lorem = "Endpoint channel is made of all PDF files received through mail";
    self.activeAgents = "2545";
    self.openCases = "235";
    self.blockedFiles = "254";
    self.sanitizedFiles = "387";
}])
