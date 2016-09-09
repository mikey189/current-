app.controller("ncStep1", ["channelList", function (channelList) {

    self = this;
    self.id = "";
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
        $(".channelType").click(function () {
            self.id = $(this).attr("id")
            self.channelTypesValues = self.id.split(".");
            self.channelTypeName = self.channelTypesValues[0];
            self.channelTypeIcon = self.channelTypesValues[1] + "." + self.channelTypesValues[2];
        })
    })

    self.ncTypeWidth = (100 / self.ncTypes.length);


    self.addChannel = function () {
        var data = {
            name: self.channelName,
            description: self.channelDescription,
            channelTypeName: self.channelTypeName,
            channelTypeIconUrl: self.channelTypeIcon
        }
        channelList.addChannel(data)
    }
}])
