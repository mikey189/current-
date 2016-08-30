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
app.directive("innerView", function(){
    return{
        restrict: 'E',
        templateUrl: "app/channelManagement/templates/endpoint/innerView/innerView.html",
        replace: false
    }
})
app.directive("channelDashboardDataSwitcher", function(){
    return{
        restrict: 'E',
        templateUrl: "app/channelManagement/templates/endpoint/innerView/dashboard/templates/dataSwitcher/dataSwitcher.html",
        replace: false
    }
})
app.directive("endpointDashboardTopFiles", function(){
    return{
        restrict: 'E',
        templateUrl: "app/channelManagement/templates/endpoint/innerView/dashboard/templates/topFiles/topFiles.html",
        replace: false
    }
})
app.directive("endpointDashboardTopUsers", function(){
    return{
        restrict: 'E',
        templateUrl: "app/channelManagement/templates/endpoint/innerView/dashboard/templates/topUsers/topUsers.html",
        replace: false
    }
})
app.directive("endpointDashboardCasesFilter", function(){
    return{
        restrict: 'E',
        templateUrl: "app/channelManagement/templates/endpoint/innerView/dashboard/templates/casesFilter/casesFilter.html",
        replace: false
    }
})

app.directive("endpointSourcesChannelType", function(){
    return{
        restrict: 'E',
        templateUrl: "app/channelManagement/templates/endpoint/innerView/sources/templates/channelType/channelType.html",
        replace: false
    }
})
app.directive("endpointSourcesChannelDescriptionBlock>", function(){
    return{
        restrict: 'E',
        templateUrl: "app/channelManagement/templates/endpoint/innerView/sources/templates/descriptionBlock/descriptionBlock.html",
        replace: false
    }
})