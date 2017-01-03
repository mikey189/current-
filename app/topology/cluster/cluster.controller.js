app.controller("cluster", function ($cluster, $rootScope) {

    var self = this
    var CurrentReferenceInMinutes = Math.floor(Date.now()/ 60000);
    var FiveMinutesAgo = CurrentReferenceInMinutes - 5;
    var one = new Date(CurrentReferenceInMinutes)
    var two = new Date(FiveMinutesAgo)
    var StartTime = $rootScope.selectedTime
    console.log(one)
    console.log(two)



    //watching time reference from $rootScope

  

    $cluster.GetClusterData(two, one)
        .then(function (answer) {
            self.ClusterData = answer.data
        })
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