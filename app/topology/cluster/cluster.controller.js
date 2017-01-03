app.controller("cluster", function ($cluster) {

    var self = this
   /* $cluster.GetClusterData()
        .then(function (answer) {
            self.ClusterData = answer.data
            console.log(self.ClusterData.CpuMeasurementList.length)
        })*/
    $cluster.GetDemoData()
        .then(function (answer) {
            self.DemoData = answer.data
        })
    self.GetDynamicChartLabels = function (data) {
        var length = data.length
        var LabelArray = new Array(length)
        return LabelArray
    };

});