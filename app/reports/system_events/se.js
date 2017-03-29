app.controller("system_events", function ($scope, system_events_factory,$q, $mdDialog, ToastNotifications) {

  $scope.se_query = {
    order: 'StartTime',
    PageSize: 10,
    PageIndex: 1
  };

  $scope.$watch('se_query.order', function (newValue, oldValue) {
    if (newValue != undefined) {
      var deferred = $q.defer();
      $scope.promise = deferred.promise;
      var order = (newValue.includes("-")) ? "Desc" : "Asc";
      var f = newValue.replace(/[^\w\s]/gi, '');
      var field = f.replace(/\s/g, "");
      system_events_factory.FilterOrder(field, order).then((res) => {
        ToastNotifications.SuccessToast("Sorting according to " + f);
        $scope.data = res.data;
        $scope.total_length = res.data.Total
        return res.data.Total
      }).then((Promise) => {
        deferred.resolve();
      })
    }
  });


  //paging the data 
  $scope.get_data = function () {
    system_events_factory.get_system_events($scope.se_query.PageIndex, $scope.se_query.PageSize, $scope.se_query.order).then(function (answer) {
      $scope.data = answer.data;
      $scope.total_length = $scope.data.Total;
    })
  }
  $scope.$watchGroup(['se_query.PageIndex', 'se_query.PageSize'], function (newValues, oldValues, scope) {
    $scope.se_query.PageIndex = newValues[0]
    $scope.se_query.PageSize = newValues[1]
    $scope.get_data()
  });
  //filter dialog
  $scope.limitOptions = $scope.limitOptions || [10, 25, 50, 100];
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
  $scope.filter = {}

  $scope.LaunchFilter = () => {
    system_events_factory.get_filter_results($scope.se_query).then((answer) => {
      if (answer.data.Total < 1) {
        ToastNotifications.ErrorToast("Your request has returned 0 result, thus it was NOT taken into account")
      } else {
        $scope.data = answer.data;
        $scope.total_length = $scope.data.Total;
      }
    }, (error) => {
      ToastNotifications.ErrorToast("an error has occured : " + error.data.Message);
    })
    $mdDialog.hide();
  }
})