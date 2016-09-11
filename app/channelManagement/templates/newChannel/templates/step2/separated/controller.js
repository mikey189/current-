app.controller("ncStep2Separated", ["saveS1Data", "channelData", function (saveS1Data, channelData) {
    
    var self = this;
    self.data = saveS1Data.get();
    
    self.icon = self.data.channelTypeName;

}])
