app.controller("reports_emails", function($scope, sanitization_factory,emails_factory, $mdDialog){

    $scope.email_query = {
        order: 'Time',
        PageSize: 10,
        PageIndex: 1
    }
    
    $scope.get_data = function () {
        emails_factory.get_emails($scope.email_query.PageIndex, $scope.email_query.PageSize, $scope.email_query.order).then(function (answer) {
            $scope.data = answer.data
            $scope.total_length = answer.data.Total
        })
    }
     $scope.LoadActions = (ID) => {
    sanitization_factory.get_actions(ID)
      .then((results) => {
        $scope.actions = results.data;
      })
  };
    $scope.$watchGroup(['$scope.email_query.PageIndex', '$scope.email_query.PageSize', '$scope.email_query.order'], function (newValues, oldValues, scope) {
        $scope.email_query.PageIndex = newValues[0]
        $scope.email_query.PageSize = newValues[1]
        $scope.email_query.order = newValues[2]
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


     $scope.open_sanitization_filter = function () {
    $mdDialog.show({
      controller: "sanitization",
      clickOutsideToClose: true,
      templateUrl: 'app/reports/sanitization/filter/filter.html',
      parent: angular.element(document).find("body")
    })
  };
  $scope.open_details = function () {
    $mdDialog.show({
      controller: "sanitization",
      /*without this, for some crazy and unknown reason, this particular dialog does inherit only
    scope values created at load, all scope value created after are not taken into account*/
      scope: $scope.$new(),
      clickOutsideToClose: true,
      templateUrl: 'app/reports/sanitization/details/details.html',
      parent: angular.element(document).find("body")
    })
  };
  sanitization_factory.get_filter_fields().then(function (answer) {
    $scope.sanitization_fields = answer.data
  })

   $scope.show_details_modal_ready = function (id) {
    sanitization_factory.get_details(id).then(function (answer) {
      $scope.sanitization_details = answer.data
    })
    $scope.open_details()
  };
    
})