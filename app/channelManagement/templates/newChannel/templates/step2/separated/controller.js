app.controller("ncStep2Separated", ["C2CData", "channelData", function (C2CData, channelData) {
    
    var self = this;
    self.dataS1 = C2CData.get();
    channelData.getInputList().then(function(response){
        self.inputList = response.data[0].endpoint
        self.width = 100/self.inputList.length+"%"        
    })
    
    
    self.passDataS3 = function(){
        self.dataS2 = 
            {
                inputType: self.selectedInput,
                inputRootFolder: self.inputRootFolder,
                inputSpeedLimit: {"size": self.inputSpeedLimit, "unit": self.inputSpeedLimitUnit},
                inputUserQuota: {"size": self.inputUserQuota, "unit": self.inputUserQuotaUnit},
                inputHoursToKeep: self.inputHoursToKeep,
                inputPermissions: self.inputPermissions,
                inputUseRelay: self.inputUseRelay,
                inputOverwriteExistingFiles: self.inputOverwriteExistingFiles,
                inputCreateZIP: self.inputCreateZIPFile,
                inputMediaBurn: {"state": self.inputAllowMediaBurn, "path": self.inputLocalPathForMediaBurn}
                
            }
        
        self.dataToPass = $.extend(self.dataS1, self.dataS2);
        C2CData.set(self.dataToPass)
        console.log(self.dataToPass)   
        
    }
    
}])
