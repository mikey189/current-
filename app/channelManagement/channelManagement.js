app.controller('channelManagement', ["channelData", function (channelData) {
    var self = this;
    channelData.getchannelList().then(function (answer) {
        self.menuItems = answer.data;
        console.log(self.menuItems)
    })
  
}]);
