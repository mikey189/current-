app.controller('dashboard', function($scope){
    $scope.purpleInt = '40';
    $scope.timeReferences = ['Real Time', '1 hour', '1 week', '2 weeks', '3 weeks', '1 month'];
});




/*dashboard directives */



app.directive("dashboardTables", function() {
   return {
       restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/dashboardTables.html',
       replace: false
   }
});


app.directive('channelsList', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/channelList/channelsList.html',
        replace: false,
        scope:{
            purpleInt: '@'
        }
    }
})

app.directive('dashboardTimeline', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/timeline/timeline.html',
        replace: false
    }
})

app.directive('fileWaiting', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/fileWaiting/fileWaiting.html',
        replace: false
    }
})
app.directive('resecTable', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/resecTable/resecTable.html',
        replace: false
    }
})

app.directive('outputTable', function(){
    return{
        restrict :'AECM', 
        templateUrl: 'app/dashboard/templates/outputTable/outputTable.html',
        replace: false
    }
})

app.directive('outputByChannel', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/outputByChannel/outputByChannel.html',
        replace: false
    }
})

app.directive('bottomLegend', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/bottomLegend/bottomLegend.html',
        replace: false
    }
})

app.directive('toolbarTop', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/dashboard/templates/toolbarTop/toolbarTop.html',
        replace: false
    }
})