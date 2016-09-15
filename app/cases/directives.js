    app.directive("showAdvancedMode", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                var button = $("#showAdvanceButton");
                var advanced = $(".advanced");
                var state = true
                element.bind("click", function () {
                    if (state) {
                        advanced.removeClass("hidden");
                        advanced.addClass("animated fadeIn");
                        button.text("RETURN TO BASIC MODE");
                        state = false;
                    } else {
                        state = true;
                        advanced.addClass("hidden")
                        button.text("SHOW ADVANCED MODE")
                    }

                })

            }
        }
    })

    app.directive("editMode", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                var table = $("table");
                var editButton = $("#editButtonPolicy");
                var edit = true;
                element.bind("click", function () {
                    if (edit) {
                        table.removeClass("notEditable")
                        editButton.html("Done")
                        edit = false;
                    } else {
                        edit = true;
                        table.addClass("notEditable")
                        editButton.text("Edit")
                    }

                })
            }
        }
    })

    app.directive("showChild", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {

                element.bind("click", function () {
                    $(this).siblings(".child").toggleClass("hidden");
                    $(this).siblings(".child").toggleClass("animated fadeInDown")
                })
            }
        }
    })


    app.directive("editField", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                var input = $(this).siblings("input");
                var icon = $(this).children("md-icon");
                element.bind("click", function () {
                    if (input.attr("disabled")) {
                        icon.html("done");
                        input.removeAttr("disabled")
                    } else {
                        icon.html("edit");
                        input.attr("disabled")
                    }

                })
            }
        }
    })

    
    app.controller("someCtrl", [function($scope){
        $scope.queryList = [
        { name: 'Check Users', fields: [ "Name", "Id"] },
        { name: 'Audit Report', fields: [] },
        { name: 'Bounce Back Report', fields: [ "Date"] } 
      ];
    $scope.models = {};
    $scope.$watch('selectedQuery', function (newVal, oldVal) {
        if ($scope.selectedQuery) {
            $scope.parameters = $scope.selectedQuery.fields;
        }
    });
        
        
        
        
        
        
        
        
        
    }])