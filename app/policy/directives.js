app.directive('policySidenav', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/policySidenav/policySidenav.html',
        replace: true,
        controller: "policySidenav",
        controllerAs: "ctrl"
    }
})

app.directive('topToolbar', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/topToolbar/topToolbar.html',
        replace: false
    }
})
app.directive('policyGraphToolbar', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/policyGraphToolbar/policyGraphToolbar.html',
        replace: false
    }
})

app.directive('policyDashboardTab', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/policyDashboardTab/policyDashboardTab.html',
        replace: false
    }
})

app.directive('policyDefinition', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/policyDefinition/policyDefinition.html',
        replace: false
    }
})

app.directive('who', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/who/who.html',
        replace: false
    }
})

app.directive('fileType', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/policyDefinition/fileType/fileType.html',
        replace: false
    }
})


app.directive('customTable', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/customTable/customTable.html',
        replace: false

    }
})

app.directive('exceptionRow', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'app/policy/templates/exceptionRow/exceptionRow.html',
        replace: true

    }
})


app.directive('detection', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/policy/templates/policyDefinition/detection/detection.html',
        replace: true
    }
})


app.directive('policySettings', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/policy/templates/policyDefinition/settings/settings.html',
        replace: false
    }
})

app.directive("policyDefinitionSwitcher", function () {
    return {
        restrict: 'E',
        templateUrl: 'app/policy/templates/policyDefinition/switcher/switcher.html',
        replace: false
    }
})
app.directive("policyDefinitionCollapseTable", function () {
    return {
        restrict: "E",
        templateUrl: "app/policy/templates/policyDefinition/templates/fileType/collapseTable/collapseTable.html",
        replace: false
    }
})

app.directive("exeException", function () {
    return {
        restrict: "A",
        templateUrl: "app/policy/templates/policyDefinition/templates/fileType/collapseTable/addException/windows/exe.html",
        replace: false
    }
})
app.directive("autoSidenavHeight", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var elmnt = document.getElementById("policyMainContent");
                var y = elmnt.scrollHeight;
                var h = y+"px";
                console.log(y)
            })
           

        }

    }
})

