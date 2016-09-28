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

    self.saveS1Data = function () {
        self.generalInformations = {
            name: self.channelName,
            description: self.channelDescription,
            channelTypeName: self.selected,
            channelTypeIconUrl: self.selectedIconSrc,
            useAsRelay: self.useAsRelay
        }

        //dynamic routing based on selection

        if (self.generalInformations.channelTypeName == "endpoint" || self.generalInformations.channelTypeName == "api" || self.generalInformations.channelTypeName == "station") {
            self.uiSref = "SInputs"
        } else {
            self.uiSref = "ncStep2Mixed"
        }
        self.channel.generalInformations = self.generalInformations;
        C2CData.set(self.channel)
        $state.go("app.channelManagement.newChannel." + self.uiSref)

    }

}])
