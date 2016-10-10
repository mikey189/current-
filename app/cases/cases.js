app.controller("cases", ["dashboardData", "channelData", function (dashboardData, channelData) {


    var self = this;
    dashboardData.getCasesSidebar().then(function (answer) {
        self.casesInfo = answer.data;
        self.totalCases = self.casesInfo.length;
    })
    self.Policy = {};
    self.readonly = false;
    self.removable = true;
    self.Policy.UsersList = [];
    self.Policy.UserGroupsList = [];
    self.Policy.channelIds = [];

    self.requireMatch = true;
    channelData.getAllChannels().then(function (answer) {
        self.data = answer.data
    })
    self.selectedChannels = [];
    self.returnedItems = [];
    
    self.items = [];


    self.filter = function () {
        for (i in self.selectedChannels) {
            var obj = {
                name: self.selectedChannels[i].Name,
                Id: self.selectedChannels[i].Id
            }
        }
                    self.items.push(obj)

        console.log("selected", self.items)
    }

}])
