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