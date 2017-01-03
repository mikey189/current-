app.controller("cluster", function ($cluster) {
    var self = this
    $cluster.GetClusterData()
        .then(function (answer) {
            self.ClusterData = answer.data
        })
    $cluster.GetDemoData()
        .then(function (answer) {
            self.DemoData = answer.data
        })
        //dummy data for graph

    self.GetGaugeChart = function (label, myData) {
        var chartObject = {};
        chartObject.type = "Gauge";
        chartObject.options = {
            width: 100,
            height: 100,
            redFrom: 90,
            redTo: 100,
            yellowFrom: 75,
            yellowTo: 90,
            minorTicks: 5
        };
        chartObject.data = [
            [label],
            [parseInt(myData)]
        ];
        console.log(chartObject)
        return chartObject
    }


});