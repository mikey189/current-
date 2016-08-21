app.controller('policy', function($scope, $mdSidenav, $location,$timeout, $q, getUsers){
    
    
    var self = this; 
 //getting the result for the async call  
//here we get the data raw, all data manipulation occurs in the controller, you get down objets in here doing so:

/* $scope.data = d;
    $scope.users = data.users
    
    and then in the model 
    
    ng-repeat=(x in users)
    
    {{x.phoneNumber}} return the phone number for eah user in the rep */
    
    
    /*getUsers.async().then(function(d) {
        $scope.userList = d;
        self.userim = $scope.userList;
    });*/
    
    
    
    //______toggling the sideNav______
    $scope.toggleMenu = function(){
        $mdSidenav('policySidenav').toggle()
    }
    
    
    $scope.path = $location.path();
    $scope.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
    $scope.casesFilter = ['Open Cases', 'Active Cases', 'High Priority', 'Priority/user'];
    
                          
$scope.labels = ["", "", "", "", "", "", ""];
  $scope.series = ['Series A'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 90]
  ];
    

$scope.casesData= [30, 40, 35];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
    
  
  $scope.lorem=  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.';
    
    
   
    
  
    
    
});





