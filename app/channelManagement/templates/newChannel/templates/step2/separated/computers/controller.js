app.controller("separated.computerList", ["C2CData", "channelData", function(C2CData, channelData){
    var self = this;
    self.channel = C2CData.get();
    
    channelData.getComputerList().then(function(answer){
        self.computerList = answer.data;
    }) 
    
    self.postChannel = function(){
        self.channel.computerList = self.addedComputers;
        channelData.addChannel(self.channel)
    }
    
}])
