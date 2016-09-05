app.controller('cases', ['$scope', 'dataFactory', function ($scope, dataFactory) {

    $scope.windows;
    $scope.mac;
    $scope.linux;
    $scope.java;

    function getWindows() {
        dataFactory.getData()
            .then(function (response) {
                $scope.windows = response.data.policyData.windows;
            });
    }

    function getMac() {
        dataFactory.getData()
            .then(function (response) {
                $scope.mac = response.data.policyData.mac;
            });
    }
    
    function getLinux() {
        dataFactory.getData()
            .then(function (response) {
                $scope.linux = response.data.policyData.linux;
            });
    }
    
    function getJava() {
        dataFactory.getData()
            .then(function (response) {
                $scope.java = response.data.policyData.java;
            });
    }
    
    getWindows();
    getMac();
    getLinux();
    getJava();
    
}])
