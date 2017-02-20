app.controller("cluster", ["$cluster", "$scope", function ($cluster, $scope) {

    var self = this;



    self.EndDate = Math.floor(Date.now() / 60000);
    self.StartDate = self.EndDate - 5;
    self.DynamicLabels = new Array(5);
    //watching any change in StartDate and EndDate and then trigger $cluster call

    $scope.$watch(angular.bind(this, () => {
        return this.selectedTime;
    }), (NewValue) => {
        self.data = {}
        switch (NewValue) {

            case "5 Minutes":
                self.StartDate = self.EndDate - 5;
                self.DynamicLabels = new Array(5);
                break;
            case "30 Minutes":
                self.StartDate = self.EndDate - 30;
                self.DynamicLabels = new Array(15);
                break;
            case "1 Hour":
                self.StartDate = self.EndDate - 60;
                self.DynamicLabels = new Array(15);
                break;
            case "90 Minutes":
                self.StartDate = self.EndDate - 90;
                self.DynamicLabels = new Array(15);
                break;
            case "2 Hours":
                self.StartDate = self.EndDate - 120;
                self.DynamicLabels = new Array(15);
                break;
        };

        self.AllClusters = {};
        var NewCPUWithLowKey = {};

        $cluster.GetClusterData(self.StartDate, self.EndDate)
            .then((res) => {
                self.All = res.data;
                self.Clusters = res.data.ClusterStatusInfo.Nodes;
                self.Clusters.forEach((CValue, CKey) => {

                    var lowerKey = CValue.Name.toLowerCase();
                    self.AllClusters[lowerKey] = CValue;
                    angular.forEach(self.All.CpuMeasurementList, (v, k) => {
                        var lowerCaseKey = k.toLowerCase();
                        NewCPUWithLowKey[lowerCaseKey] = v;
                    })
                    self.AllClusters[lowerKey].CPUs = [];
                    self.AllClusters[lowerKey].currentJobs = [];
                    angular.forEach(NewCPUWithLowKey[lowerKey], (lv, lk) => {
                        self.AllClusters[lowerKey].CPUs.push(lv.CpuLoad);
                        self.AllClusters[lowerKey].currentJobs.push(lv.LowComplexityRunningSanitizations, lv.HighComplexityRunningSanitizations, lv.ManyComplexityRunningSanitizations);
                    });
                });
                console.log(self.AllClusters);
            })

        var AllMeasuresAreNull = (element, index, array) => {
            return element < 2;
        }
        self.IsEmptyMeasurement = (Measurement) => {
            return Measurement.every(AllMeasuresAreNull);
        }
    });

}]);

app.filter("toDate", () => {
    return (input) => {
        var NewDate = new Date(input);
        console.log(NewDate);
        return NewDate;
    }
})