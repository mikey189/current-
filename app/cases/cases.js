app.controller("cases", ["policyData", function (policyData) {

    var self = this;
    self.data = {};
    policyData.getData().then(function (response) {
        self.data = response.data;
        console.log(self.data)
        return self.data;

    })
    self.obj = {};
    
    self.postData = function() {
        self.data2post = self.obj
        console.log(self.data2post)
        return self.data2post
    }

}])
