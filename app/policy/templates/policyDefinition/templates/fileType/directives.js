app.directive("saveFiletypes", function (policyData) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                if (!scope.ctrl.isFiletypeEditable) {
                    scope.ctrl.isFiletypeEditable = true
                } else {
                    scope.ctrl.isFiletypeEditable = false;
                    policyData.postFiletype(scope.ctrl.policyId, scope.ctrl.Filetypes).then(function (success) {
                        scope.ctrl.show_success_dialog("Your changes were sucessfully saved")
                        scope.ctrl.getPolicyInfo(scope.ctrl.policyId)
                    }, function (error) {
                        scope.ctrl.show_error_dialog("An error occured", error.data.Message)
                    })
                }
            })
        }
    }
})
app.directive("tableIsDisabledModal", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                console.log("clicked")
                if (scope.ctrl.isFiletypeEditable = false) {
                    scope.ctrl.show_error_dialog("Warning", "Make sure to click on EDIT")
                }
            })
        }
    }
})


app.directive("filterExtensions", () => {
    return {
        restrict: "A",
        link: (scope, element, attrs) => {
            element.on("keyup", (x) => {
                var input, query, table, parentTR, ParentClassification, i;
                input = document.getElementById("search-extensions");
                query = input.value.toLowerCase();
                table = document.getElementById("filetype-table");
                ParentClassification = $("parent-itself").html();
                parentTR = $(".parent-classification");
                // Loop through all table rows, and hide those who don't match the search query
                var ParentCategory = scope.ctrl.Filetypes;
                var extensionsArr = [];
                var MainArray = [];
                for (i in ParentCategory) {
                    MainArray.push(ParentCategory[i]);
                };
                var concat = _.concat(MainArray);
                var flattened = _.flattenDeep(concat);
                var index = _.findIndex(flattened, (o) => {
                    return o.Extension == query;
                })
                if (index > -1) {
                    var Parent = (flattened[index].Type.toLowerCase());

                    parentTR.each(function (index) {
                        console.log(Parent)
                        var self = $(this);
                        var sectionName = self.find(".parent-itself").html().toLowerCase().replace(" ", "");;
                        console.log(sectionName)
                        if (sectionName == Parent) {
                            self.css("background-color", "red");
                            console.log(sectionName + " is the same as : " + Parent);

                        }
                    })
                };
            });
        }
    };
});