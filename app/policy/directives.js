
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

app.directive("policyDefinitionSwitcher", function(){
    return{
        restrict: 'E',
        templateUrl: 'app/policy/templates/policyDefinition/switcher/switcher.html',
        replace: false
    }
})
app.directive("osTable", function(){
    return{
        restrict: 'E',
        templateUrl: 'app/policy/templates/policyDefinition/templates/fileType/OSTables/OS/OS.html',
        replace: false
    }
})
app.directive("windowsFiles", function(){
    return{
        restrict: 'E',
        templateUrl: 'app/policy/templates/policyDefinition/templates/fileType/OSTables/types/windowsFiles.html',
        replace: false
    }
})


app.directive( 'editInPlace', function() {
  return {
    restrict: 'E',
    scope: { value: '=' },
    template: '<span ng-click="edit()" ng-bind="value"></span><input ng-model="value"></input>',
    link: function ( $scope, element, attrs ) {
      // Let's get a reference to the input element, as we'll want to reference it.
      var inputElement = angular.element( element.children()[1] );
      
      // This directive should have a set class so we can style it.
      element.addClass( 'edit-in-place' );
      
      // Initially, we're not editing.
      $scope.editing = false;
      
      // ng-click handler to activate edit-in-place
      $scope.edit = function () {
        $scope.editing = true;
        
        // We control display through a class on the directive itself. See the CSS.
        element.addClass( 'active' );
        
        // And we must focus the element. 
        // `angular.element()` provides a chainable array, like jQuery so to access a native DOM function, 
        // we have to reference the first element in the array.
        inputElement[0].focus();
      };
      
      // When we leave the input, we're done editing.
      inputElement.prop( 'onblur', function() {
        $scope.editing = false;
        element.removeClass( 'active' );
      });
    }
  };
});

