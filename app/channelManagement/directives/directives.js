app.directive("channelSidebar", function(){
    return{
        restrict: 'E',
        templateUrl: 'app/channelManagement/templates/sidebar/sidebar.html',
        replace: false
    }
})
app.directive("topBar", function(){
    return{
        restrict: 'E',
        templateUrl: "app/channelManagement/templates/endpoint/topBar/topBar.html",
        replace: false
    }
})
app.directive("infoTopBar", function(){
    return{
        restrict: 'E',
        templateUrl: "app/channelManagement/templates/endpoint/infoTopBar/infoTopBar.html",
        replace: false
    }
})
app.directive("innerNav", function(){
    return{
        restrict: 'E',
        templateUrl: "app/channelManagement/templates/endpoint/innerNav/innerNav.html",
        replace: false
    }
})