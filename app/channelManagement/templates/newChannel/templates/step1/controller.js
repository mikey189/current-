app.controller("ncStep1", ["channelList", function (channelList) {



    self = this;

    self.ncTypes = [{
            "icon": "icons/ncEndpoint.svg",
            "name": "Endpoint"
    }, {
            "icon": "icons/ncEmail.svg",
            "name": "Mail"
    }, {
            "icon": "icons/ncStation.svg",
            "name": "Station"
    }, {
            "icon": "icons/ncDirWatcher.svg",
            "name": "Directory Watcher"
        },
        {
            "icon": "icons/ncIcap.svg",
            "name": "ICAP"
    }, {
            "icon": "icons/ncApi.svg",
            "name": "API"
    }]

    self.editName = function () {
        angular.element("#nameTXTArea").removeAttr('disabled');
        angular.element("#nameTXTArea").addClass("activeTextArea");
        angular.element("#confName").removeClass("hidden")

    }

    self.confName = function () {
        angular.element("#confName").addClass('hidden');
        angular.element("#nameTXTArea").removeClass("activeTextArea");
        angular.element("#nameTXTArea").attr("disabled", true);

    }

    self.editDesc = function () {
        angular.element("#descTXTArea").removeAttr('disabled');
        angular.element("#descTXTArea").addClass("activeTextArea");
        angular.element("#confDesc").removeClass("hidden")

    }

    self.confDesc = function () {
        angular.element("#confDesc").addClass('hidden');
        angular.element("#descTXTArea").removeClass("activeTextArea");
        angular.element("#descTXTArea").attr("disabled", true);

    }

    $(document).ready(function () {
        $(".ncTypesItems").hover(function () {
            $(this).toggleClass("ncTypesHover")
            $(this).find(".ncTypeTitle").toggleClass("ncTypesHoverTitle")
            $(this).find("g").toggleClass("hoveredIcon")
        })
    })


    self.ncTypeWidth = (100 / self.ncTypes.length);


    channelList.getChannel().then(function (response) {
        self.channelData = response.data
        console.log(self.channelData)
    })


    self.addChannel = function () {
        var data = {
            name: self.channelName,
            description: self.channelDescription
        }
        console.log(data)
        channelList.addChannel(data)
    }
/*JSON.stringify({"name": self.channelName, "description": self.channelDescription});  */

}])
