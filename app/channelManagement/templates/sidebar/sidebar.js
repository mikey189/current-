app.controller('channelManagementSidebar', function ($timeout, $mdSidenav, $log) {
    this.menuItems = [{"Name": "Create Channel", "link": "newChannel.step1"},{"Name": "Endpoint", "link": "endpoint.dashboard"},  {"Name": "Directory Watcher", "link": "directoryWatcher"}, {"Name": "API", "link": "api"}]
});