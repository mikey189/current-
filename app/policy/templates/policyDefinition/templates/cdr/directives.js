app.directive("toggleRegexEdition", () => {
    return {
        restrict: "A",
        link: (scope, element, attrs) => {
            element.click(() => {
                scope.ctrl.CDRHyperLinkEditable = (!scope.ctrl.CDRHyperLinkEditable) ? true : false;
            })
        }
    }
})
app.directive("toggleCdrFailActionsEdition", () => {
    return {
        restrict: "A",
        link: (scope, element, attrs) => {
            element.click(() => {
                scope.ctrl.CDRFailActionsEditable = (!scope.ctrl.CDRFailActionsEditable) ? true : false;
            })
        }
    }
})

app.directive("assignCdrAction", () => {
    return {
        restrict: "A",
        scope: {
            newvalue: "=",
            parent: "=",
            category: "="
        },
        link: (scope, element, attrs) => {
            element.bind("click", () => {
                angular.forEach(scope.parent, (key, value) => {
                    if (value.includes(scope.category) && scope.parent[value] == true) {
                        scope.parent[value] = false;
                        scope.parent[scope.newvalue] = true;
                    } else {
                        scope.parent[scope.newvalue] = true;
                    }
                    scope.$apply();

                })
            })
        }
    }
})