app.controller("dashboard", function (toastr, MainDashboard) {

    var self = this;

    self.purpleInt = '40';
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];

    self.getData = () => {

        MainDashboard.GetDashboard().then((res) => {
            self.inputs = res.data.DashboardInputs;
            self.outputs = res.data.DashboardOutputs;
            self.resecTable = res.data.FileTypesStatistics;
            self.TotalInputs = res.data.TotalInputs;
            self.TotalOutputs = res.data.TotalOutputs;
            self.main = res.data;
            self.UserAlerts = res.data.UserAlerts;


            if (self.UserAlerts.length > 0) {
                var NotificationsArr = [];
                for (i in self.UserAlerts) {
                    NotificationsArr.push(self.UserAlerts[i]);
                    localStorage.setItem("notifications", JSON.stringify(NotificationsArr));
                    if (self.UserAlerts[i].Severity === "Error") {
                        toastr.error(self.UserAlerts[i].Description + '<br> <a style="color: yellow" href="' + self.UserAlerts[i].Url + '">Read More</a>', self.UserAlerts[i].Name, {
                            allowHtml: true
                        });
                    }
                }

            }
        })
    }


})