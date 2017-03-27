app.controller("dashboard", function (toastr, Dashboard, $mdDialog) {

    var self = this;
    self.purpleInt = '40';
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
    self.DashboardHasLoaded = false;


    //sidenav with important info => init 

    self.SideInfo = [{
        "title": "Total Processed Files",
        "result": "789"
    }, {
        "title": "Total Processed Files",
        "result": "Docx"
    }, {
        "title": "Total Processed Files",
        "result": "A.Cook"
    }, {
        "title": "Average Processing Time",
        "result": "1.2 sec"
    }]

self.chartTitle = "Processed Files";


    Dashboard.GetDummyData().then((res) => {
        self.Data = res.data.TopBar;
    })
    Dashboard.GetFeed().then((res) => {
        self.news = res.data.articles;
    })

    var SearchDataFromDate = (StartingDate) => {
        console.log(StartingDate)
    };
    self.TriggerDataChange = () => {

        if (self.SelectedTimeFrame != 'custom') {
            SearchDataFromDate(self.SelectedTimeFrame);
        } else {
            $mdDialog.show({
                templateUrl: "app/dashboard/templates/timepicker.html",
                parent: angular.element(document.body),
                clickOutsideToClose: true
            });

        }

    }
    self.CancelDialog = () => {
        $mdDialog.cancel();
    }

    self.CloseDialogAndFilterData = (SpecificDate) => {
        $mdDialog.hide()
        SearchDataFromDate(SpecificDate);
    }

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

    self.FileComplexityLabels = ["High Complexity", "Low Complexity", "Many Complexity", "4", "5", "6", "7", "8", "9", "10"];
    self.FileComplexity = [300, 500, 100, 130, 150, 134, 430, 129, 109, 180];
    self.TrafficByPolicy = ["Marketing", "Engineers", "Admin", "Enpoint", "API"];
    self.PolicyTraffic = [200, 300, 150, 130, 101];
    self.TrafficByChannel = ["Endpoint", "Mail", "API"];
    self.ChannelTraffic = [230, 270, 170];

})