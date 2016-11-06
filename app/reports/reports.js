app.controller("reports",["policyChannels","policyData",  function (policyChannels, policyData) {

    var self = this;
    
    policyChannels.getAvailablechannels().then(function(answer){
        
        self.availableChannels = answer.data;
         
    });
    
    self.currentChannels = [{"key": "Channel 1", "value": 1},{"key": "Channel 2", "value": 1},{"key": "Channel 3", "value": 1}];
    
    self.areChannelsEditable = false;
    
    policyData.getFiletypes().then(function(answer){
        self.filetype = answer.data
    })
    self.areExtensionsVisible = [];
    
    self.types = [];
  
}])

