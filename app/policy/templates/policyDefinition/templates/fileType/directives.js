app.directive("saveFiletypes", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                if (!scope.ctrl.isFiletypeEditable) {
                    scope.ctrl.isFiletypeEditable = true
                } else {
                    var NewFileTypeFacets = []
                   angular.forEach(scope.ctrl.PolicyFacets['Policy File Types Settings'].Values, function(L0Value, L0Key){
                       var FacetStr = "";
                       var FirstKeyOfFacet = L0Key;
                       FacetStr += FirstKeyOfFacet;
                       angular.forEach(L0Value, function(L1Value, L1Key){
                           FacetStr+=":"+L1Key
                           angular.forEach(L1Value, function(L2Value, L2Key){
                               FacetStr+=":"+L2Value
                           })
                       })
                       NewFileTypeFacets.push(FacetStr)
                       scope.ctrl.PolicyFacets['Policy File Types Facets'].Values = NewFileTypeFacets;
                       
                   })
                }
            })
        }
    }
})




                    /*angular.forEach(scope.ctrl.PolicyFacets["Policy File Types Settings"].Values, function (L0Value, L0Key) {
                        var object = {}
                        angular.forEach(L0Value, function (L1Value, L1Key) {
                            var ExtensionValues = ""
                            var SubStr = ""
                                //L1Key example : StrPropType_FileTypePropertyName_Archives
                                //L1Value example : // [object nupkg : {}]
                                //example of value to store : Archives:nupkg:True:True:0:True:False:False:False:False:False:
                            var biggerArr = []
                            angular.forEach(L1Value, function (L2Value, L2Key) {
                                //L2Key = nupkg
                                //L2Value = Object {isAllowed: false, SizeLimit: Object}
                                var str = ""
                                angular.forEach(L2Value, function (L3Value, L3Key) {
                                        var L3Object = {}
                                        var value = ""
                                        if (L3Key === "SizeLimit") {

                                            value = L3Value.Size + L3Value.Unit

                                        } else {

                                            value = L3Value

                                        }
                                        str += value + ":"

                                    })
                                    //extracting the name of parent category for L1Key
                                    //this causes an error
                                //var regexKey = L1Key.match("[^_]*$")
                                var ext = L1Key + ":" + L2Key + ":" + str
                                    //removing last ':'
                                ext = ext.substring(0, ext.length - 1);
                                biggerArr.push(ext)
                            })
                            object[L1Key] = biggerArr
                            scope.ctrl.ObjectThatIsSentToServer = object
                        })
                    })
                    scope.ctrl.isFiletypeEditable = false;
            scope.ctrl.post_policy_settings(scope.ctrl.PolicyFacets)*/