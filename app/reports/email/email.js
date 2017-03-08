app.controller("reports_emails", function ($scope, sanitization_factory, $q, emails_factory, $mdDialog, channelData, ToastNotifications) {



  $scope.email_query = {
    order: 'StartTime',
    PageSize: 10,
    PageIndex: 1,

  };

  $scope.$watch('email_query.order', function (newValue, oldValue) {
    if (newValue != undefined) {
      var deferred = $q.defer();
      $scope.promise = deferred.promise;
      var order = (newValue.includes("-")) ? "Desc" : "Asc";
      var f = newValue.replace(/[^\w\s]/gi, '');
      var field = f.replace(/\s/g, "");
      emails_factory.FilterOrder(field, order).then((res) => {
        ToastNotifications.SuccessToast("Sorting according to "+f);
        $scope.data = res.data;
        $scope.total_length = res.data.Total
        return res.data.Total
      }).then((Promise) => {
        deferred.resolve();
      })
    }
  });


  $scope.get_data = function () {
    emails_factory.get_emails($scope.email_query.PageIndex, $scope.email_query.PageSize).then(function (answer) {
      $scope.data = answer.data
      $scope.total_length = answer.data.Total
    })
  };
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
  $scope.OpenFilter = function () {
    $mdDialog.show({
      scope: $scope, // use parent scope in template
      preserveScope: true,
      clickOutsideToClose: true,
      templateUrl: 'app/reports/email/filter/filter.html',
      parent: angular.element(document).find("body")
    })
  };
  $scope.open_details = function () {
    $mdDialog.show({
      scope: $scope, // use parent scope in template
      preserveScope: true,
      clickOutsideToClose: true,
      templateUrl: 'app/reports/email/details/details.html',
      parent: angular.element(document).find("body")
    })
  };
  $scope.show_details_modal_ready = function (id) {
    sanitization_factory.get_details(id).then((answer) => {
      $scope.sanitization_details = answer.data
    })
    $scope.open_details()
  };
  sanitization_factory.get_filter_fields().then(function (answer) {
    $scope.sanitization_fields = answer.data
  });
  channelData.getComputerList().then((computers) => {
    $scope.computer_list = computers.data;
  });
  channelData.getAllChannels().then((channels) => {
    $scope.ChannelList = channels.data;
  })
  $scope.CancelFilter = () => {
    $mdDialog.cancel();
  }

  $scope.f_q = {};

  $scope.SendFilterQuery = () => {
    $mdDialog.hide()
    emails_factory.get_emails($scope.f_q).then((answer) => {
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

})