
app.directive('policySidenav', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'VIEWS/policy/templates/policySidenav.html',
        replace: true
    }
})

app.directive('topToolbar', function(){
    return {
        restrict: 'AECM',
        templateUrl: 'VIEWS/policy/templates/topToolbar.html',
        replace: false
    }
})
app.directive('policyGraphToolbar', function(){
    return{
        restrict:'AECM',
        templateUrl: 'VIEWS/policy/templates/policyGraphToolbar.html',
        replace: false
    }
})

app.directive('policyDashboardTab', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'VIEWS/policy/templates/policyDashboardTab.html',
        replace: false
    }
})

app.directive('secondTab', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'VIEWS/policy/templates/secondTab.html',
        replace: false 
    }
})

app.directive('thirdTab', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'VIEWS/policy/templates/thirdTab.html',
        replace: false
}
})

app.directive('fileType', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'VIEWS/policy/templates/fileType.html', 
        replace: false,
        scope: {
            execs: '=',
            files: '=',
            fileTypeSections: '=',
            family: '='
        }
    }
})


app.directive('customTable', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'VIEWS/policy/templates/customTable.html', 
        replace: false,
        scope: {
            fileTypeSections: '=',
            files: '='
        }  
    }
})

app.directive('exceptionRow', function(){
    return{
        restrict: 'AECM',
        templateUrl: 'VIEWS/policy/templates/exceptionRow.html', 
        replace: true
        
    }
})


app.directive('rowCreator', function() {
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
}});
app.directive('detection', function(){
    return{
        restrict: 'E',
        templateUrl: 'VIEWS/policy/templates/detection.html',
        replace: true
    }
})


/*

app.directive('rowCreator', function($compile){
    return{
        restrict: 'AE',
        template: '<button>Add Row</button>',
        link: function(scope, element, attrs){
            element.bind('click', function(){
                element.find('table').append('<tr><td><p>WOW</p></td><td><p>WOW</p></td></tr>');
                
                console.log('appended !')
            })
                    $compile(element.contents())(scope);

        }
    }
})

*/

