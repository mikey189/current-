app.directive('channelTopBar', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/policy/templates/who/directives/channelTopBar/channelTopBar.html',
        replace: false
    }
})
app.directive('groupsList', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/policy/templates/who/directives/groups/groups.html',
        replace: false
    }
})