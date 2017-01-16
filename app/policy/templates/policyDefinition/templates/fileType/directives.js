app.directive("saveFiletypes", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                if (!scope.ctrl.isFiletypeEditable) {
                    scope.ctrl.isFiletypeEditable = true
                } else {

                    scope.ctrl.post_policy_settings(scope.ctrl.FileTypeMiddleMan["Policy File Types Settings"].Values)
                    scope.ctrl.isFiletypeEditable = false;

                }
            })
        }
    }
})






/*var NewFileTypeFacets = []
                    angular.forEach(scope.ctrl.FileTypeMiddleMan['Policy File Types Settings'].Values, function (L0Value, L0Key) {
                        var FacetStr = "";
                        var FirstKeyOfFacet = L0Key;
                        console.log(FirstKeyOfFacet)
                        FacetStr += FirstKeyOfFacet;
                        angular.forEach(L0Value, function (L1Value, L1Key) {
                            
                            angular.forEach(L1Value, function (L2Value, L2Key) {
                               
                            })
                        })
                        NewFileTypeFacets.push(FacetStr)
                        scope.ctrl.NewFileTypeFacets = NewFileTypeFacets
                        scope.ctrl.isFiletypeEditable = false

                        console.log(NewFileTypeFacets)
                    })*/