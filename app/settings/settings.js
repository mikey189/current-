app.controller('settings', function (system_properties, $scope) {

  var self = this;

  self.allProps = [];
  system_properties.get_properties().success(function (answer) {
    self.allProps = answer;

  });

  self.save_properties = function () {
    system_properties.post_properties(self.allProps).success(function (answer) {
      self.allProps = answer;
    }).error(function (err) {
      alert("There was an error loading this page : " + error.data.Message);
    })
  }
  self.sortType = function (propType) {
    switch (propType) {
      case "text":
        return "text"
        break;

      case "datetime":
        return "date"
        break;
      case "password":
        return "password"
        break;
      case "checkbox":
        return "checkbox"
        break;
      default:
        return "text"
        break;
    }
  }

})

//data size filter 

app.directive("formatter", function ($timeout) {
  return {
    restrict: 'A',
    require: "ngModel",
    link: function (scope, element, attr, ngModel) {
      var el = element
      ngModel.$formatters.push(function (value) {
        var parsed = parseInt(value.replace(/\D/g, ''));
        if(ngModel.$$rawModelValue.match(/[a-z]/i)){
          var str = value.match(/[0-9]/)
        }
        return parsed
      })

    }
  }
})