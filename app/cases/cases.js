app.controller("cases", ["dashboardData", function (dashboardData) {


    var self = this;
    dashboardData.getCasesSidebar().then(function (answer) {
        self.casesInfo = answer.data;
        self.totalCases = self.casesInfo.length;
    })
self.repeat = 1000;
}])
