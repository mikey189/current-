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
  self.defineType = function (propType) {
    switch (propType) {
      case "text":
        return "text"
        break;
      case "number":
        return "number"
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


app.directive("dta", function () {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attr, ngModel) {

      ngModel.$formatters.push(function (value) {
        if (value === "number") {
          value = parseInt(value.match(/\d+/g));
        }
        console.log(value)
        return value
      });

    }
  };
});