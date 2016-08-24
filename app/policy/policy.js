app.controller('policy', function($scope, $mdSidenav, $location,$timeout, $q){
    var self = this;  
    //______toggling the sideNav______
    $scope.toggleMenu = function(){
        $mdSidenav('policySidenav').toggle()
    }
    
    
    $scope.path = $location.path 
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
})













