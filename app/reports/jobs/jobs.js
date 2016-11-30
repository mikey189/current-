app.controller("reports_jobs", function ($scope, jobs_factory) {

    $scope.jobs_query = {
        order: 'Time',
        PageSize: 5,
        PageIndex: 1
    };
    
    $scope.get_data = function () {
        jobs_factory.get_jobs($scope.jobs_query.PageIndex, $scope.jobs_query.PageSize, $scope.jobs_query.order).then(function (answer) {
            $scope.data = answer.data
            console.log($scope.jobs_query)
            console.log($scope.data)
            $scope.total_length = answer.data.Total
        })
    }
    $scope.$watchGroup(['$scope.jobs_query.PageIndex', '$scope.jobs_query.PageSize', '$scope.jobs_query.order'], function (newValues, oldValues, scope) {
        $scope.jobs_query.PageIndex = newValues[0]
        $scope.jobs_query.PageSize = newValues[1]
        $scope.jobs_query.order = newValues[2]
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