app.controller('userList', ["channelData", function(channelData){
    
    var self = this;
    
    channelData.getComputerList().then(function(answer){
        self.users = answer.data;
    })
    
}])