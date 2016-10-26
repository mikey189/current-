app.controller('who', ["channelData", "policyUsers", function (channelData, policyUsers) {

    var self = this;

    self.showList = false;
    self.hiddenDiv = false;

    channelData.getComputerList().then(function (answer) {
        self.users = answer.data;
    })

    policyUsers.getData().then(function (answer) {
        self.data = answer.data
    })
    self.areUsersVisible = false;

    self.isChannelAdded = false;
    
    self.isChannelEditable = false
    
    self.channelsArray = [];

}])
