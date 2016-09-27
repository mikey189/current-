app.controller("separated.computerList", ["C2CData", "channelData", function(C2CData, channelData){
    var self = this;
    self.previousData = C2CData.get();
    
    self.addedComputers = [];
    
    channelData.getComputerList().then(function(answer){
        self.computerList = answer.data;
    })    
}])