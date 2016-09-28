app.controller("separated.settings", ["C2CData", "channelData", function (C2CData, channelData) {
    var self = this;
    self.channel = C2CData.get();
    self.basicSettings = {};
    self.advancedSettings = {};
    self.next = function () {
        self.settings = {
            basicSettings: self.basicSettings,
            advancedSettings: self.advancedSettings
        }
        self.channel.settings = self.settings;
    }
    C2CData.set(self.channel)
}])
