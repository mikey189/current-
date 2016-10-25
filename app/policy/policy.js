app.controller('policy', function ($scope, $location, $timeout, $q) {
    var self = this;
    
    $scope.path = $location.path
    $scope.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
    $scope.casesFilter = ['Open Cases', 'Active Cases', 'High Priority', 'Priority/user'];


    $scope.labels = ["", "", "", "", "", "", ""];
    $scope.series = ['Series A'];
    $scope.data = [
    [65, 59, 80, 81, 56, 55, 90]
  ];


    $scope.casesData = [30, 40, 35];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    
    $scope.sidenavIsOpened = false;
    
})
