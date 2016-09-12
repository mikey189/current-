app.controller("ncStep1", ["channelData", "$state", "C2CData", "$scope", function (channelData, $state, C2CData, $scope) {

    self = this;
    self.id;
    self.uiSref;
    
    
    channelData.getIcons().then(function (response) {
        self.channelIcons = response.data
        self.ncTypeWidth = (100 / self.channelIcons.length);
    })
    
    self.saveS1Data = function () {
        var s1Data = {
            name: self.channelName,
            description: self.channelDescription,
            channelTypeName: self.selected,
            channelTypeIconUrl: self.selectedIconSrc
        }
        
            //dynamic routing based on selection

        if (s1Data.channelTypeName == "endpoint" || s1Data.channelTypeName == "api" || s1Data.channelTypeName == "station") {
            self.uiSref = "ncStep2Separated"
        } else {
            self.uiSref = "ncStep2Mixed"
        }
        $state.go("app.channelManagement.newChannel." + self.uiSref)
        C2CData.set(s1Data)

    }

}])
