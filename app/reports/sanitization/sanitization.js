app.controller("sanitization", function ($scope, sanitization_factory, $mdDialog, channelData, $mdToast) {
  $scope.selected = [];
  $scope.query = {
    order: 'StartTime',
    PageSize: 10,
    PageIndex: 1
  };
  $scope.f_q = {};
  //paging the data 
  $scope.get_data = function () {
    sanitization_factory.get_data($scope.query.PageIndex, $scope.query.PageSize, $scope.query.order).then(function (answer) {
      $scope.data = answer.data;
      var DataLength = $scope.data.List.length;
      $scope.total_length = $scope.data.Total;
    })
  };
  $scope.LoadActions = (ID) => {
    sanitization_factory.get_actions(ID)
      .then((results) => {
        $scope.actions = results.data;
      })
  };

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
  channelData.getComputerList().then(function (answer) {
    $scope.computer_list = answer.data
  })
  channelData.getchannelList().then(function (answer) {
      $scope.ChannelList = answer.data
    })
    //end of filter diaglog
    //details dialog
  $scope.send_filter_query = function () {
    $mdDialog.hide()
    console.log($scope.f_q)
    sanitization_factory.get_filter_results($scope.f_q).then(function (answer) {
      $scope.data = answer.data
    })
  }
  $scope.cancel_filter = function () {
      $mdDialog.cancel()
    }
    /*whoever you are do never touch that piece of code, dialog from the angular material team work in 
     a very weird and unstable way, thus do not change the local version of angular material and do not
    not even think about doing some update : current version RC1*/
  $scope.show_details_modal_ready = function (id) {
    sanitization_factory.get_details(id).then(function (answer) {
      $scope.sanitization_details = answer.data
    })
    $scope.open_details()
  };

  $scope.ActionSuccedded = (Filename) => {
    $mdToast.show(
      $mdToast.simple()
      .textContent("Requested action successfully performed on " + Filename)
      .position("bottom right")
      .hideDelay(4500)
    );
  };

});

app.filter("CutUntil", () => {
  return (value, character) => {
    return value.split(character).pop();
  }
})

app.filter("MillisecondsConvertor", () => {
  return (value) => {
    var seconds = Math.floor(value / 1000);
    return seconds;
  }
})