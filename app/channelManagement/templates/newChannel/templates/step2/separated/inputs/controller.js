app.controller("separated.inputs", ["C2CData", "channelData", function (C2CData, channelData, $scope) {

    var self = this;
    self.channel = C2CData.get();
    console.log(self.channel)
    self.selectedInputS1 = self.channel.generalInformations.channelTypeName;
    self.selectedOutput;
    self.showISMB = false;
    self.showOSMB = false;
    self.iSelected = false;
    
    self.index = 0;
    self.iList = new Array(10);
    
    self.oSMB = {};
    self.inputSettings = [];
    self.outputSettings = [];
    self.selectedInput = {};
    self.inputsArray = [];
    self.iSMBCount = 0;
    self.oSMBCount = 0;


    self.check = function () {
        console.log(self.iList)
    }

    channelData.getInputList().then(function (response) {
        self.iData = response.data[0]
        self.inputList = self.iData[self.selectedInputS1];
        self.totalLength = self.inputList.length;
        self.iRow1 = self.inputList.slice(0, self.totalLength / 2);
        self.iRow2 = self.inputList.slice(self.totalLength / 2, self.totalLength);
    })


}])
