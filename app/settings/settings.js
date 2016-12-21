app.controller('settings', function (system_properties) {

  var self = this;

  self.allProps = [];
  system_properties.get_properties().success(function (answer) {
    self.allProps = answer;

   /*
   attempting to parse type numbers but without success
    angular.forEach(self.allProps, function (value, key) {

      var parser = function (value) {
        console.log(parseInt(value.match(/\d+/g)))
        value = parseInt(value.match(/\d+/g));
        return value
      }

      var myObject = {
        value: value,
        key: key
      }
      var Properties = myObject.value.Properties

      angular.forEach(Properties, function (value, key) {
        var propObject = {
          value: value,
          key: key
        }
        var inputValues = propObject.value
        var type = inputValues.InputType
        var value = inputValues.Value
        angular.forEach(inputValues, function () {
          if (inputValues.InputType === "number") {
            return parser(inputValues.Value)
          }
        })
      })
      console.log(self.allProps)
  })*/
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