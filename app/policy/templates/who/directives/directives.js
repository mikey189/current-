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

app.directive('userList', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/policy/templates/who/directives/userList/userList.html',
        replace: false
    }
})

app.directive('computerList', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/policy/templates/who/directives/computerList/computerList.html',
        replace: false
    }
})