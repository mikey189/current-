app.controller("ncStep1", ["channelData", "$state", "C2CData", "$scope", function (channelData, $state, C2CData, $scope) {

    self = this;
    self.id;
    self.uiSref;
    self.useAsRelay = false;
    self.channel = {};
    channelData.getIcons().then(function (response) {
        self.channelIcons = response.data
        self.ncTypeWidth = (100 / self.channelIcons.length);
    })

   
}])
