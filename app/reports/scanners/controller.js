app.controller('reports_scanners', function ($scope, scanners_factory) {
    $scope.scanners = {};
    $scope.collect_updates = () => {
        scanners_factory.post_scanners_collect_updates().then((answer) => {
            $scope.isRunning = answer.data;
        });

    }
    $scope.query = {
        order: 'DataFileTime',
        PageSize: 10,
        PageIndex: 1
    };

    $scope.GetScannerStatus = () => {
        scanners_factory.get_scanners_status().then((answer) => {
            $scope.scanners = answer.data;
            $scope.total_length = $scope.scanners.length;
            $scope.arrFromMyObj = Object.keys($scope.scanners).map( (key) => {
                return $scope.scanners[key];
            });
        });
    };
    $scope.$watchGroup(['query.PageIndex', 'query.PageSize', 'query.order'], function (newValues, oldValues, scope) {
        $scope.query.PageIndex = newValues[0]
        $scope.query.PageSize = newValues[1]
        $scope.query.order = newValues[2]
        $scope.GetScannerStatus();
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
    };


})