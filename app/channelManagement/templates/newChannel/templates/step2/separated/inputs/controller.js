app.controller("separated.inputs", ["C2CData", "channelData", function (C2CData, channelData) {
    var self = this;
    self.channel = C2CData.get();
    self.selectedInput = self.channel.generalInformations.channelTypeName;
    channelData.getInputList().then(function (response) {
        self.rawData = response.data[0]
        self.inputList = self.rawData[self.selectedInput];
        self.width = 100 / self.inputList.length + "%"
    })
    self.passDataS3 = function () {
        self.inputSettings = {
            type: self.selectedInput,
            rootFolder: self.rootFolder,
            speedLimit: {
                "size": self.speedLimit,
                "unit": self.speedLimitUnit
            },
            userQuota: {
                "size": self.userQuota,
                "unit": self.userQuotaUnit
            },
            hoursToKeep: self.hoursToKeep,
            permissions: self.permissions,
            useRelay: self.useRelay,
            overwriteExistingFiles: self.overwriteExistingFiles,
            createZIP: self.createZIPFile,
            mediaBurn: {
                "state": self.allowMediaBurn,
                "path": self.localPathForMediaBurn
            }
        }
        self.channel.inputSettings = self.inputSettings;
        console.log(self.channel)
    }
}])
