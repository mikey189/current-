app.directive("editChannelSettings", function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            element.click(function(){
                var self = $(this)
                var settings_table = $(".channel-settings-table")
                if (!scope.ctrl.are_settings_editable){
                    self.html("SAVE")
                    settings_table.removeClass("notEditable")
                    scope.ctrl.are_settings_editable = true
                }else{
                    //MAKE API CALL TO SEND DATA 
                    self.html("EDIT")
                    settings_table.addClass("notEditable")
                    scope.ctrl.are_settings_editable = false
                }
            })
        }
    }
})