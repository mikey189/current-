app.controller('detection',["policyData", function(policyData){
    var self = this; 
    self.true = true
    console.log("wow")
    self.data;
    self.dataSet = [];
    self.obj = {};
    self.readonly = false;
    self.removable = true;

    self.exceptionUsers = [];
    //loading table data
    policyData.getData().then(function (answer) {
        self.data = answer;
        for (i = 0; i < self.data.length;) {
            self.dataSet.push(self.data[i]);
            i++;
        }
    })
    self.saveData = function () {

        }
        //loading th sections with descriptions
    policyData.getDescriptions().then(
        function (answer) {
            self.headers = answer;
        }
    )

    self.showException = false;

    
}])