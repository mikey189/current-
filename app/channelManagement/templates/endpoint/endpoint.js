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
    console.log("the root id ", self.rootId)
    channelDashboard.getData().then(function (answer) {
        self.data = answer.data[self.rootId]
        console.log(self.data)
    })
}])
