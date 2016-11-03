app.controller('who', ["channelData","policyChannels", "policyUsers", function (channelData, policyChannels, policyUsers) {

    var self = this;

    self.showList = false;
    self.hiddenDiv = false;
    
    

    channelData.getComputerList().then(function (answer) {
        self.users = answer.data;
    })

    
    
    policyUsers.getData().then(function (answer) {
        self.data = answer.data
    })
    
    
    
    
    policyChannels.getAvailablechannels().then(function(answer){
        
        self.availableChannels = answer.data;
         
    });
    
    
    self.areUsersVisible = false;

    self.isChannelAdded = false;
    
    self.areChannelsEditable = false;
    
    self.currentChannels = [];
    

}])
