app.controller("separated.settings", ["C2CData", "channelData", function(C2CData, channelData){
    var self = this;
    self.previousData = C2CData.get();
    console.log(self.previousData)
    
    self.basicSettings = {};
    self.advancedSettings = {};
    
}])