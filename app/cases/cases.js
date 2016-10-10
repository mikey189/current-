app.controller("cases", ["dashboardData", function (dashboardData) {


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
    self.Policy.channelsList = [];
}])
