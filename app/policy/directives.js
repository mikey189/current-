
app.directive('policySidenav', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/policySidenav/policySidenav.html',
        replace: true
    }
})

app.directive('topToolbar', function(){
    return {
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/topToolbar/topToolbar.html',
        replace: false
    }
})
app.directive('policyGraphToolbar', function(){
    return{
        restrict:'AECM',
        templateUrl: 'app/policy/templates/policyGraphToolbar/policyGraphToolbar.html',
        replace: false
    }
})

app.directive('policyDashboardTab', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/policyDashboardTab/policyDashboardTab.html',
        replace: false
    }
})

app.directive('policyDefinition', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/policyDefinition/policyDefinition.html',
        replace: false 
    }
})

app.directive('who', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/who/who.html',
        replace: false
}
})

app.directive('fileType', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/policyDefinition/fileType/fileType.html', 
        replace: false
    }
})


app.directive('customTable', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/customTable/customTable.html', 
        replace: false
       
    }
})

app.directive('exceptionRow', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/exceptionRow/exceptionRow.html', 
        replace: true
        
    }
})


app.directive('detection', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/policy/templates/policyDefinition/detection/detection.html',
        replace: true
    }
})


app.directive('policySettings', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/policy/templates/policyDefinition/settings/settings.html',
        replace: false
    }
})




/*app.directive('rowCreator', function() {
return {
    restrict: "AE",
    //scope: {},
    template: "<button ng-click='addRow()'>Add Row</button><exception-row ng-repeat='row in rows track by $index'></exception-row>",
    
    link: function(scope, element, attrs) {
       scope.rows = [];
       scope.addRow = function() {
           scope.rows.push(scope.rows.length); // or whatever else you want
       };
    }
}});*/