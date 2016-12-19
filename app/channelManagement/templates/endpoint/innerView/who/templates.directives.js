app.directive('channelTopBar', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/channelManagement/templates/endpoint/innerView/who/templates/channelTopBar/channelTopBar.html',
        replace: false
    }
})
app.directive('allGroups', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/channelManagement/templates/endpoint/innerView/who/templates/groups/all-groups.html',
        replace: false
    }
})
app.directive("currentGroups", function(){
    return{
        restrict: "E",
        templateUrl: 'app/channelManagement/templates/endpoint/innerView/who/templates/groups/current-groups.html',
        replace: false
    }
})
app.directive('allUsers', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/channelManagement/templates/endpoint/innerView/who/templates/userList/all-users.html',
        replace: false
    }
})
app.directive("currentUsers", function(){
    return{
        restrict: "E",
        templateUrl: "app/channelManagement/templates/endpoint/innerView/who/templates/userList/current-users.html",
        replace: false
    }
})

app.directive("allComputers", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/endpoint/innerView/who/templates/computers/all-computers.html",
        replace: false
    }
})
app.directive("currentComputers", function(){
    return{
        restrict: "E",
        templateUrl: "app/channelManagement/templates/endpoint/innerView/who/templates/computers/current-computers.html",
        replace: false
    }
})