app.controller("cluster", ["$cluster", "$scope", function ($cluster, $scope) {

    var self = this

    self.EndDate = Math.floor(Date.now() / 60000);
    self.StartDate = self.EndDate - 5;
    //watching any change in StartDate and EndDate and then trigger $cluster call

    $scope.$watch(angular.bind(this, function () {
        return this.selectedTime;
    }), function (NewValue) {
        self.data = {}
        switch (NewValue) {

            case "5 Minutes":
                self.StartDate = self.EndDate - 5
                break;
            case "30 Minutes":
                self.StartDate = self.EndDate - 30
                break;
            case "1 Hour":
                self.StartDate = self.EndDate - 60
                break;
            case "90 Minutes":
                self.StartDate = self.EndDate - 90
                break;
            case "2 Hours":
                self.StartDate = self.EndDate - 120
                break;
        }

        $cluster.GetClusterData(self.StartDate, self.EndDate)
            .then(function (answer) {
                self.ClusterData = answer.data.CpuMeasurementList
                self.data = {}

                var cpus = []
                var currentLow = []
                var currentHight = []
                var currentMedium = []
                angular.forEach(self.ClusterData, function (value, key) {
                    console.log(key)
                    self.data[key]= key

                })
            })
    });





    self.GetDynamicChartLabels = function (data) {
        var length = data.length
        var LabelArray = new Array(length)
        return LabelArray
    };

}]);