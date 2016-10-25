app.directive("ncSeparatedAdvancedSettings", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/newChannel/templates/step2/separated/settings/templates/advanced.html",
        replace: false
    }
})

app.directive("ncSeparatedBasicSettings", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/newChannel/templates/step2/separated/settings/templates/basic.html",
        replace: false
    }
})

app.directive("matchChildreHeight", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            $(document).ready(function(){
                var basicHeight = $("#ncBasicSettings").height();
                var advanced = $("#ncAdvancedSettings").height(basicHeight);
            })
               
        }
    }
})
