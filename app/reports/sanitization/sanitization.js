app.controller("sanitization", function ($scope, sanitization_factory, $mdDialog,$q,  channelData, ToastNotifications) {
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

  $scope.$watchGroup(['query.PageIndex', 'query.PageSize'], function (newValues, oldValues, scope) {
    $scope.query.PageIndex = newValues[0]
    $scope.query.PageSize = newValues[1]
    $scope.get_data();
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
      scope: $scope, // use parent scope in template
      preserveScope: true,
      clickOutsideToClose: true,
      templateUrl: 'app/reports/sanitization/filter/filter.html',
      parent: angular.element(document).find("body")
    })
  };
  $scope.open_details = function () {
    $mdDialog.show({
      scope: $scope, // use parent scope in template
      preserveScope: true,
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
    sanitization_factory.get_filter_results($scope.f_q).then(function (answer) {
      if (answer.data.Total < 1) {
        ToastNotifications.ErrorToast("Your request has returned 0 result, thus it was NOT taken into account")
      } else {
        $scope.data = answer.data;
        $scope.total_length = $scope.data.Total;
      }
    }, (error) => {
      ToastNotifications.ErrorToast("an error has occured : " + error.data.Message);

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
    ToastNotifications.SuccessToast("Action Successfully performed on "+Filename);
  };


$scope.$watch('query.order', function (newValue, oldValue) {
    if (newValue != undefined) {
      var deferred = $q.defer();
      $scope.promise = deferred.promise;
      var order = (newValue.includes("-")) ? "Desc" : "Asc";
      var f = (newValue.includes("User"))? "UserName" : newValue.replace(/[^\w\s]/gi, '');
      var field = f.replace(/\s/g, "");
      sanitization_factory.FilterOrder(field, order).then((res) => {
        ToastNotifications.SuccessToast("Sorting according to "+f);
        $scope.data = res.data;
        $scope.total_length = res.data.Total
        return res.data.Total
      }).then((Promise) => {
        deferred.resolve();
      })
    }
  });







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