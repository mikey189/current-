app.controller("policyDefinitionSwitcher", [function () {
    this.hoverTabs = function () {
        $(document).ready(function () {
            $(".roundedTabSelector").hover(function () {
                $(this).css('background-color', '#6B69EB');
                $(this).css('color', 'white');

            }, function () {
                $(this).css("background-color", "white");
                $(this).css("color", "#484554");
            })
        })
    }
    this.hoverTabs();
}])
