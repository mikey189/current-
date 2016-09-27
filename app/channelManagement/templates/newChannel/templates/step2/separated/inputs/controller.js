app.controller("separated.inputs", ["C2CData", "channelData", function (C2CData, channelData) {

    var self = this;
    self.channel = C2CData.get();
    self.selectedInputS1 = self.channel.generalInformations.channelTypeName;
    self.iSelected = true;
    self.oSelected = true;
    
    self.selectedInputs = [];
    self.selectedOutputs = [];
    self.iSMBList = [];
    self.oSMBList = [];
    
    
    self.inputList = [];
    channelData.getInputList().then(function (response) {
        self.iData = response.data[0]
        self.inputList = self.iData[self.selectedInputS1];
        self.totalLength = self.inputList.length;
        self.iRow1 = self.inputList.slice(0, self.totalLength / 2);
        self.iRow2 = self.inputList.slice(self.totalLength / 2, self.totalLength);
    })
    
    channelData.getRelayList().then(function(response){
        self.relayList = response.data;
        self.iRelayList = self.relayList.ismb;
        console.log(self.iRelayList)
        self.oRelayList = self.relayList.osmb;
        
    })
        
}])
