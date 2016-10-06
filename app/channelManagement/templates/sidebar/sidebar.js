app.controller('channelManagementSidebar', ["channelData", function (channelData) {
    var self = this;
    channelData.getchannelList().then(function (answer) {
        self.menuItems = answer.data;
    })
}]);
