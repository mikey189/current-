app.directive("channelInputsSources", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/endpoint/innerView/sources/templates/input-sources/input-sources.html",
        replace: false
    }
})

app.directive("channelOutputsSources", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/endpoint/innerView/sources/templates/output-sources/output-sources.html",
        replace: false
    }
})

app.directive("iSmb", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/endpoint/innerView/sources/templates/iSMB/iSMB.html",
        replace: false
    }
})

app.directive("oSmb", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/endpoint/innerView/sources/templates/oSMB/oSMB.html",
        replace: false
    }
})

app.directive("selectInput", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this)
                self.toggleClass("input_is_selected")
            })
        }
    }
})

app.directive("selectOutput", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this)
                self.toggleClass("input_is_selected")
            })
        }
    }
})

app.directive("addIsmb", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var ismb = {};
                scope.ctrl.ismbList.push(ismb)
                scope.$apply()
            })
        }
    }
})

app.directive("addOsmb", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var osmb = {};
                scope.ctrl.osmbList.push(osmb)
                scope.$apply()
            })
        }
    }
})

app.directive("editField", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                if ($(this).find("md-icon").html() == "edit") {
                    $(this).siblings("input").removeAttr("disabled")
                    $(this).siblings("input").css("background-color", "#f1f1f1")
                    $(this).find("md-icon").html("done")
                } else {
                    $(this).siblings("input").attr("disabled", true)
                    $(this).find("md-icon").html("edit")
                    $(this).siblings("input").css("background-color", "white")

                }
            })
        }
    }
})

app.directive("editInputsAndOutputs", function (channelData, $state, $mdDialog) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var edition_section = $("#edition_section")
                var self = $(this)
                if (!scope.ctrl.are_outputs_and_outputs_editable) {
                    edition_section.removeClass("notEditable")
                    self.css("background-color", "red")
                    self.html("SAVE")
                    scope.ctrl.are_outputs_and_outputs_editable = true
                        //emptying arrays in case user plays too much with edit and save buttons
                    scope.ctrl.selectedOutputs = {}
                    scope.ctrl.selectedInputs = {}
                } else {
                    edition_section.addClass("notEditable")
                    self.css("background-color", "#311B92")
                        //recording selected inputs
                    var input_element = $(".input_element")
                    input_element.each(function () {
                            var self = $(this)
                            if (self.hasClass("input_is_selected")) {
                                var input_name = self.find("md-content").html()
                                    // var input_object = {}
                                    //input_object[input_name] = true
                                scope.ctrl.selectedInputs[input_name] = true
                            }
                        })
                        //recording selected ouputs
                    var output_elements = $(".output_element")
                    output_elements.each(function () {
                            var self = $(this)
                            if (self.hasClass("input_is_selected")) {
                                var output_name = self.find("md-content").html()
                                    //var output_object = {}
                                    //output_object[output_name] = true
                                scope.ctrl.selectedOutputs[output_name] = true
                            }
                        })
                        //recording the object that stores all info of the view
                    scope.ctrl.IoConfiguration = {
                            "inputConfiguration": {
                                "SelectedIoList": scope.ctrl.selectedInputs,
                                "IoSmbConfiguration": scope.ctrl.ismbList
                            },
                            "outputConfiguration": {
                                "SelectedIoList": scope.ctrl.selectedOutputs,
                                "IoSmbConfiguration": scope.ctrl.osmbList
                            }
                        }
                        //posting the data to the server
                    channelData.update_inputs_outputs(scope.ctrl.rootId, scope.ctrl.IoConfiguration).then(function (success) {
                            //reassign the model from the success answer and then trigger scope.$apply()
                            //still not working but why ? find a way to "reload" the data without flickering the view or trigger $digest 'cycle'
                        $mdDialog.show(
                            $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('YAY')
                            .textContent('Channel Settings were successfully updated')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('AWSOME!')
                        );
                    }, function (error) {
                        $mdDialog.show(
                            $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('ERROR')
                            .textContent("An error occured while updating the settings : " + error.data.Message + ". Please contact RESEC")
                            .ariaLabel('Alert Dialog Demo')
                            .ok('CLOSE')
                        );
                    })
                    scope.$apply()
                    self.html("EDIT")
                    scope.ctrl.are_outputs_and_outputs_editable = false
                }
            })
        }
    }
})

app.directive("matchParentWidth", function () {
    return {
        restrict: "A",
        priority: 1000,
        link: function (scope, element, attrs) {
            element.ready(function () {
                var input_element = $(".input_element")
                var output_element = $(".output_element")

                var inputs_parents_width = $("#inputs_sources").width() / 3 + "px"
                var output_parents_width = $("#outputs_sources").width() / 3 + "px"

                input_element.css("width", inputs_parents_width)
                output_element.css("width", output_parents_width)

            })
        }
    }
})