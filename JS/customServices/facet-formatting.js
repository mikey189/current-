app.factory("FacetFormatter", function () {
    return {
        FormatForPOST: function (Facet) {
            var Facets2POST = [];
            angular.forEach(Facet, function (L0Value, L0Key) {
                var NewFacet = {
                    "Description": L0Key,
                    "Values": {}
                }
                angular.forEach(L0Value.Values, function (L1Value, L1Key) {
                        if (L0Value.hasOwnProperty("Template")) {
                            var KeyType = L0Value.Template.Properties[L1Key].Type
                            if (KeyType.includes("FacetPropertyType_MultiChoice") && L1Value !== null && typeof L1Value === "object") {

                                var ObjectString = "";

                                angular.forEach(L1Value, function (MCValue, MCKey) {

                                        var PropString = "";
                                        //if is not object  then dont go into this function 

                                        angular.forEach(MCValue, function (MC1Value, MC1Key) {
                                            PropString += MC1Value + ":"
                                        })
                                        PropString = PropString.substring(0, PropString.length - 1);

                                        ObjectString += MCKey + "=" + PropString + "|"

                                    })
                                    //ObjectString = ObjectString.substring(0, ObjectString.length - 1);
                                NewFacet.Values[L1Key] = ObjectString

                            } else {

                                console.log(L1Value)
                                NewFacet.Values[L1Key] = (L1Value != null) ? L1Value.toString() : "";

                            }

                        }
                    }

                )

                Facets2POST.push(NewFacet)

                console.log(Facets2POST)
            })
            return Facets2POST;


        }

    }

})