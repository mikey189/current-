app.controller("sanitization", function ($scope, sanitization_factory, $mdDialog, channelData) {

  $scope.selected = [];
  $scope.query = {
    order: 'StartTime',
    PageSize: 10,
    PageIndex: 1
  };
  //paging the data 
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
  $scope.open_sanitization_filter = function () {
    $mdDialog.show({
      controller: "sanitization",
      controllerAs: "ctrl",
      clickOutsideToClose: true,
      templateUrl: 'app/reports/sanitization/filter/filter.html',
      parent: angular.element(document).find("body")
    })
  };
  sanitization_factory.get_filter_fields().then(function (answer) {
    $scope.sanitization_fields = answer.data
  })
  channelData.getComputerList().then(function (answer) {
    $scope.computer_list = answer.data
  })
  channelData.getChannelTypes().then(function (answer) {
      $scope.channel_types = answer.data
    })
    //end of filter diaglog
    //details dialog
  $scope.show_details_modal = function () {
    $mdDialog.show({
      controller: "sanitization",
      templateUrl: 'app/reports/sanitization/details/details.html',
      parent: angular.element(document).find("body")
    })
  };

  $scope.send_filter_query = function () {
    $mdDialog.hide()
    sanitization_factory.get_filter_results($scope.f_q).then(function (answer) {
      $scope.data = answer.data

    })
  }
  $scope.cancel_filter = function () {
    $mdDialog.cancel()
  }
  $scope.get_details = function (id) {
    sanitization_factory.get_details(id).then(function (answer) {
      $scope.sanitization_details = answer.data
      console.log(JSON.stringify($scope.sanitization_details))
    })
  }

});