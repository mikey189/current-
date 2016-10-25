app.controller("channelTypeCtrl", [function () {

    this.data = [{
        "legend": "Mails",
        "iconName": "mail_outline"
    }, {
        "legend": "Drives",
        "iconName": "usb"
    }, {
        "legend": "My Documents",
        "iconName": "folder"
    }, {
        "legend": "Mobile Devices",
        "iconName": "phone_android"
    }];
    
    this.width = 100/(this.data.length);
   
    $(document).ready(function () {
        this.hoverMe = function () {
            $(".fileTypeDiv").hover(function () {
                $(this).css("background-color", "#6B69EA");
            $(this).find('md-icon').css('color', 'white');
                $(this).find('md-content').css('color', 'white')
            },
                    function () {
                        $(this).css('background-color', 'white');
                $(this).find('md-icon').css('color', '#6B69EA');
                $(this).find('md-content').css('color', 'black');
                
                    }
            )
        }
        this.hoverMe();
    })
}])
