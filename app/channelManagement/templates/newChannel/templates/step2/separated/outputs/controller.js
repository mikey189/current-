app.controller("separated.outputs", ["C2CData", "channelData", function (C2CData, channelData) {
    
    var self = this;
    self.channel = C2CData.get();
    console.log(self.channel)
    
    self.channelType = self.channel.generalInformations.channelTypeName;
    
    channelData.getInputList().then(function (response) {
        self.rawData = response.data[0];
        self.outputList = self.rawData[self.channelType]
        self.width = 100 / self.outputList.length + "%"
    })
    self.passDataSettings = function () {
        self.outputSettings = {
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
        self.channel.outputSettings = self.outputSettings;
        
        
        channelData.addChannel(self.channel);
        
        
        console.log(self.channel);
    }
}])
