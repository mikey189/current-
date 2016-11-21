app.controller("sanitization", function ($scope, sanitization_factory, $mdDialog, channelData) {
  $scope.selected = [];
  $scope.query = {order: 'StartTime', PageSize: 10, PageIndex: 1};
  $scope.get_data = function () {
    sanitization_factory.get_data($scope.query.PageIndex, $scope.query.PageSize, $scope.query.order).then(function (answer) {
      $scope.data = answer.data
      $scope.total_length = $scope.data.Total
    })
  }
  $scope.$watchGroup(['query.PageIndex', 'query.PageSize', 'query.order'], function (newValues, oldValues, scope) {
    $scope.query.PageIndex = newValues[0]
    $scope.query.PageSize = newValues[1]
    $scope.query.order = newValues[2]
    $scope.get_data()
  });

  //filter dialog
  $scope.limitOptions = $scope.limitOptions ? undefined : [10, 25, 50, 100];
  $scope.options = {rowSelection: true, multiSelect: true, autoSelect: true, decapitate: false, largeEditDialog: false, boundaryLinks: false, limitSelect: true, pageSelect: true};
  $scope.open_sanitization_filter = function() {
    $mdDialog.show({
      controller: "sanitization",
      clickOutsideToClose: true,
      templateUrl: 'app/reports/sanitization/filter/filter.html',
      parent: angular.element(document.querySelector('body'))
   
    })
  };
  $scope.close_sanitization_filter = function(){
    $mdDialog.hide()
  }
  sanitization_factory.get_filter_fields().then(function(answer){
    $scope.sanitization_fields = answer.data
  })
  channelData.getComputerList().then(function(answer){
    $scope.computer_list = answer.data
  })
  //end of filter diaglog
});

