app.controller('channelManagementSidebar', function ($timeout, $mdSidenav, $log) {
    this.menuItems = [{"Name": "Create Channel", "link": "newChannel"},{"Name": "Endpoint", "link": "endpoint.dashboard"}, {"Name": "Endpoint 2", "link": "endpoint2"}, {"Name": "Mail", "link": "mail"}, {"Name": "Directory Watcher", "link": "directoryWatcher"}, {"Name": "API", "link": "api"}, {"Name": "ICAP", "link": "icap"}]
});