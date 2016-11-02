app.directive("addChannel", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.click(function () {
                var self = $(this);
                var chip = self.parents("md-chip")
                var addSign = self.find("md-icon");
                var chipValue = parseInt(self.attr("_value"));
                var chipKey = self.attr("_key");
                var chipObject = {
                    chipValue: chipValue,
                    chipKey: chipKey
                }
                if (chip.hasClass("selectedChip")) {
                    chip.removeClass("selectedChip")
                    addSign.html("add");
                    addSign.css("color", "#616161");
                    var index = scope.ctrl.currentChannels.indexOf(chipObject)
                    scope.ctrl.currentChannels.splice(index, 1);
                    scope.$apply();
                } else {
                    chip.addClass("selectedChip")
                    addSign.html("remove")
                    addSign.css("color", "white");
                    if (scope.ctrl.currentChannels.indexOf(chipObject) === -1) {
                        scope.ctrl.currentChannels.push(chipObject);
                    }
                    scope.$apply();
                }
            })
        }
    }

})



app.directive("blockEdition", function () {
    return {
        restrict: "A",
        link: function (scope, element, attr) {
            var editButton = $("#editChannels")
            var editionZone = $(".channelEditionZone");
            element.click(function () {
                if (!scope.ctrl.isWindowEditable) {
                    editButton.addClass("animated shake")
                } else {
                    editButton.removeClass("animated shake")
                }
            })
        }
    }
})

app.directive("toggleEdition", function () {
    return {
        restrict: "A",
        link: function (scope, element, attr) {
            element.click(function () {
                var editionZone = $(".channelEditionZone");
                var editButton = $("#editWhoSection");
                var channelTopBar = $("#channelTopBar");
                var delete_users_icon = $(".delete-users");

                if (!scope.ctrl.isWindowEditable) {
                    editionZone.removeClass("notEditable")
                    channelTopBar.removeClass("hidden")
                    editButton.html("DONE");
                    editButton.addClass("inEdition");
                    delete_users_icon.removeClass("hidden");
                    scope.ctrl.isWindowEditable = true
                } else {
                    editionZone.addClass("notEditable");
                    channelTopBar.addClass("hidden")
                    editButton.html("EDIT")
                    editButton.removeClass("inEdition")
                    delete_users_icon.addClass("hidden");
                    scope.ctrl.isWindowEditable = false
                }
            })
        }
    }
})

app.directive("deleteUserFromPolicy", function($timeout){
    return {
        restrict :"A",
        link: function(scope, element, attrs){
            element.click(function(){
                var self = $(this);
                var user = self.parent(".user-user-list")
                user.addClass("animated slideOutRight")
                $timeout(function(){
                    user.addClass("hidden")
                }, 800)
            })
            
        }
    }
})

app.directive("deleteGroupFromPolicy", function($timeout){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            element.click(function(){
               var self = $(this);
            var group  = self.parent(".user-user-list")//not the perfect name
            group.addClass("animated slideOutLeft");
            $timeout(function(){
                group.addClass("hidden")
            }, 800) 
            })
            
        }
    }
})
