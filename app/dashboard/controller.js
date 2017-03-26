app.controller("dashboard", function (toastr, DummyDashboard) {

    var self = this;
    self.purpleInt = '40';
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
    self.DashboardHasLoaded = false;
    DummyDashboard.GetDummyData().then((res) => {
        self.Data = res.data.TopBar;
    })
self.PickedDate = "13/02/2015"
    self.DummyLabels1 = ["January", "February", "March", "April", "May", "June", "July"];
    self.series = ['Series A', 'Series B'];
    self.DummyData1 = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    self.onClick = function (points, evt) {
        console.log(points, evt);
    };
    self.datasetOverride = [{
        yAxisID: 'y-axis-1'
    }, {
        yAxisID: 'y-axis-2'
    }];
    self.options = {
        scales: {
            yAxes: [{
                id: 'y-axis-1',
                type: 'linear',
                display: true,
                position: 'left'
            }, {
                id: 'y-axis-2',
                type: 'linear',
                display: true,
                position: 'right'
            }]
        }
    };
 
    self.FileComplexityLabels = ["High Complexity", "Low Complexity", "Many Complexity"];
    self.FileComplexity = [300, 500, 100];
    self.TrafficByPolicy = ["Marketing", "Engineers", "Admin"];
    self.PolicyTraffic = [200, 300, 150];
    self.TrafficByChannel = ["Endpoint", "Mail", "API"];
    self.ChannelTraffic = [230, 270, 170];

})