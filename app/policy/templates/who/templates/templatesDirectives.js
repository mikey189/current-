app.directive('channelTopBar', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/policy/templates/who/templates/channelTopBar/channelTopBar.html',
        replace: false
    }
})
app.directive('groupsList', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/policy/templates/who/templates/groups/groups.html',
        replace: false
    }
})

app.directive('userList', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/policy/templates/who/templates/userList/userList.html',
        replace: false
    }
})

app.directive("computersUsingThisPolicy", function(){
    return{
        restrict: "E",
        templateUrl: "app/policy/templates/who/templates/computers/computers.html",
        replace: false
    }
})