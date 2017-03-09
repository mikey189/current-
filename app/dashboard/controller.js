app.controller("dashboard", function (toastr, MainDashboard) {

    var self = this;

    self.purpleInt = '40';
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
    self.createToast = (type, title, message, link) => {
        toastr[type]('<h3>' + title + '</h3>' + message + '<br> <a style="color: yellow" href="' + link + '">Read More</a>', 'With HTML', {
            allowHtml: true
        });
    }
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
                for (i in self.UserAlerts) {
                    switch (self.UserAlerts[i].Severity) {
                        case "Success":
                            toastr.success('<h3>' + self.UserAlerts[i].Name + '</h3>' + self.UserAlerts[i].Description + '<br> <a style="color: yellow" href="' + self.UserAlerts[i].Url + '">Read More</a>', 'With HTML', {
                                allowHtml: true
                            });
                            break;
                        case "Error":
                            toastr.error('<h3>' + self.UserAlerts[i].Name + '</h3>' + self.UserAlerts[i].Description + '<br> <a style="color: yellow" href="' + self.UserAlerts[i].Url + '">Read More</a>', 'With HTML', {
                                allowHtml: true
                            });
                            break;
                        case "Warning":
                        toastr.warning('<h3>' + self.UserAlerts[i].Name + '</h3>' + self.UserAlerts[i].Description + '<br> <a style="color: yellow" href="' + self.UserAlerts[i].Url + '">Read More</a>', 'With HTML', {
                                allowHtml: true
                            });
                            break;
                    }
                }

            }
        })
    }


})