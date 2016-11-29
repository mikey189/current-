app.controller("reports_jobs", function($scope, jobs_factory){

    $scope.query = {
        order: 'Time',
        PageSize: 10,
        PageIndex: 1
    };
    $scope.get_data = function () {
        jobs_factory.get_jobs($scope.query.PageIndex, $scope.query.PageSize, $scope.query.order).then(function (answer) {
            $scope.data = answer.data
            console.log($scope.data)
            $scope.total_length = answer.data.Total
        })
    }
    $scope.$watchGroup(['$scope.query.PageIndex', '$scope.query.PageSize', '$scope.query.order'], function (newValues, oldValues, scope) {
        $scope.query.PageIndex = newValues[0]
        $scope.query.PageSize = newValues[1]
        $scope.query.order = newValues[2]
        $scope.get_data()
    });
    //filter dialog
    $scope.limitOptions = $scope.limitOptions ? undefined : [10, 25, 50, 100];

    $scope.options = {
        rowSelection: true,
        multiSelect: true,
        autoSelect: true,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: false,
        limitSelect: true,
        pageSelect: true
    }
    
})