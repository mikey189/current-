app.controller("ncStep1", ["channelData", "$state", "C2CData", "$scope", function (channelData, $state, C2CData, $scope) {

    self = this;
    self.id;
    self.uiSref;
    self.channel = {};


    channelData.getIcons().then(function (response) {
        self.channelIcons = response.data
        self.ncTypeWidth = (100 / self.channelIcons.length);
    })


    self.saveS1Data = function () {
        self.S1Data = {
            name: self.channelName,
            description: self.channelDescription,
            channelTypeName: self.selected,
            channelTypeIconUrl: self.selectedIconSrc
        }

        self.channel.generalInformations = self.S1Data;
        //dynamic routing based on selection

        if (self.S1Data.channelTypeName == "endpoint" || self.S1Data.channelTypeName == "api" || self.S1Data.channelTypeName == "station") {
            self.uiSref = "SInputs"
        } else {
            self.uiSref = "ncStep2Mixed"
        }
        $state.go("app.channelManagement.newChannel." + self.uiSref)
        C2CData.set(self.channel)

    }

}])
