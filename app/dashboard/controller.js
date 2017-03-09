app.controller("dashboard", function (MainDashboard) {

    var self = this;

    self.purpleInt = '40';
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
    MainDashboard.GetDashboard().then((res) => {
        self.inputs = res.data.DashboardInputs;
        self.outputs = res.data.DashboardOutputs;
        self.resecTable = res.data.FileTypesStatistics;
        self.TotalInputs = res.data.TotalInputs;
        self.TotalOutputs = res.data.TotalOutputs;
        self.main = res.data;

    })

})