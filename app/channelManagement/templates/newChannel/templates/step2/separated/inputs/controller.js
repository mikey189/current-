app.controller("separated.inputs", ["C2CData", "channelData", function (C2CData, channelData) {
    
    var self = this;
    self.channel = C2CData.get();
    
    self.selectedInputS1 = self.channel.generalInformations.channelTypeName;
    
    self.selectedOutput;
    self.showISMB = false; 
    self.showOSMB = false; 
    self.iSelected = false;
    self.iSMB = {};
    self.oSMB = {};
    self.inputSettings = [];
    self.outputSettings = [];
    self.selectedInput= {};
    self.inputsArray = [];
    

    
    channelData.getInputList().then(function (response) {
        self.iData = response.data[0]
        self.inputList = self.iData[self.selectedInputS1];
        self.totalLength = self.inputList.length;
        self.iRow1 = self.inputList.slice(0,self.totalLength/2);
        self.iRow2 = self.inputList.slice(self.totalLength/2, self.totalLength);
    })
    
    self.checker = function(){
        console.log("input settings", self.inputSettings)
        console.log("name array", self.inputsArray)
    }
    
    
    
}])
