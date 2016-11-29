app.controller('settings', function (system_properties) {

  var self = this;

  self.allProps = [];
  system_properties.get_properties().success(function (answer) {
    //self.allReports = answer.data;
    self.allProps = answer;

    //for (var i = 0; i < answer.data.length; i++) {
    //    var item = answer.data[i];   
    //    self.allProps.push({ "TabName": item.Key, "Properties": item.Value });
    //}
    console.log(self.allProps);
  });

  self.save_properties = function () {
    system_properties.post_properties(self.allProps).success(function (answer) {
      self.allProps = answer;
      console.log(answer);
    }).error(function (err) {
      console.log(err);
    })
  }

})

/*app.filter("int_convertor", function (number) {
  function isNumeric(number) {
    return (!isNaN(parseFloat(number)) && isFinite(number));
  }
  return function (inputNumber) {
    console.log(inputNumber)
    var result = isNumeric(inputNumber)
    console.log(result)
    if (result) {
      console.log("translating to int")
      return parseInt(number)
    } else {
      console.log("string")
      return inputNumber
    }
  }
});*/
app.filter('num', function() {
    return function(input) {
      return parseInt(input, 10);
    };
});