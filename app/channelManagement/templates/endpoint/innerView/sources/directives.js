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
app.directive("oFtp", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/endpoint/innerView/sources/templates/ftp/oftp.template.html",
        replace: false
    }
})

app.directive("iFtp", function () {
    return {
        restrict: "E",
        templateUrl: "app/channelManagement/templates/endpoint/innerView/sources/templates/ftp/iftp.template.html",
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
                scope.ctrl.NumberOFiSMBs++;
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
                scope.ctrl.NumberOFoSMBs++;
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

app.directive("editInputsAndOutputs", (channelData, $state, $mdDialog) => {
    return {
        restrict: "A",
        link: (scope, element, attrs) => {
            element.click(() => {
                var self = $(this)
                var selectedInputs = {};
                var selectedOutputs = {};
                //recording selected inputs
                var input_element = $(".input_element")
                input_element.each(function () {
                        var self = $(this)
                        if (self.hasClass("input_is_selected")) {
                            var input_name = self.find("md-content").html();
                                // var input_object = {}
                                //input_object[input_name] = true
                            selectedInputs[input_name] = true;
                        }
                    })
                    //recording selected ouputs
                var output_elements = $(".output_element");
                output_elements.each(function(){
                        var self = $(this)
                        if (self.hasClass("input_is_selected")) {
                            var output_name = self.find("md-content").html();
                                //var output_object = {}
                                //output_object[output_name] = true
                            selectedOutputs[output_name] = true;
                        }
                    })
                    //recording the object that stores all info of the view
                scope.ctrl.IoConfiguration = {
                        "inputConfiguration": {
                            "SelectedIoList": selectedInputs,
                            "IoSmbConfiguration": scope.ctrl.ismbList
                        },
                        "outputConfiguration": {
                            "SelectedIoList": selectedOutputs,
                            "IoSmbConfiguration": scope.ctrl.osmbList,
                            "NullStoreName": scope.ctrl.NullStoreName
                        }
                        
                    }
               
                    //posting the data to the server
                channelData.update_inputs_outputs(scope.ctrl.rootId, scope.ctrl.IoConfiguration).then(function (success) {

                    scope.ctrl.HTTP_Dialogs.ShowSuccessDialog()
                    scope.ctrl.UpdateChannelData(success.data.Id)
                }, function (error) {
                    scope.ctrl.HTTP_Dialogs.ShowErrorDialog(error.data.Message)

                })
                scope.$apply();
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