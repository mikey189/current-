app.controller("dashboard", ["$scope","dashboardData", function ($scope, dashboardData){
    
    var self = this;
    
    self.purpleInt = '40';
    self.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
    
    dashboardData.getInput().then(function (response) {
        self.input = response.data
        console.log(self.input)
    })
    dashboardData.getTotalInput().then(function(response){
        self.totalInputs = response.data;
    })
    
    dashboardData.getOutput().then(function(response){
        self.output = response.data;
        console.log(self.output)
    })
    
    $(document).ready(function(){
        var inputHeight = document.getElementsByClassName('dOutputDataContainer').offsetHeight;
        console.log(inputHeight)
    })
    
}]);


