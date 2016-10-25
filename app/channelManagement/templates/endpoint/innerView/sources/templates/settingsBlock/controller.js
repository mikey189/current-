app.controller("endpointSourcesSettingsBlock", [function(){
    this.rootFolder = "";
    this.speedLimit;
    this.speedUnits = ["Bytes", "MB", "GB", "TB"];
    this.selectedSpeedUnit;
    this.quotaLimit;
    this.quotaUnits = ["Bytes", "MB", "GB", "TB"];
    this.selectedQuotaUnit;
    this.speedUnit;
    this.hoursToKeep;
    this.folderPermissions;
    this.useRelay = false;
    this.overwriteFiles = true;
    this.userSpeedLimit = this.speedLimit+"(this.selectedSpeedUnit)";
    this.userQuotaLimit = this.quotaLimit+this.selectedQotaUnit;
    this.singleZIP = false;
    this.mediaBurn = true;
    this.mediaBurnPath = "";
}])