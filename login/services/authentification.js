/*
app.factory("authentification", ["$rootScope", "$http", function($rootScope, $http){ 
    
    
    this.isAuthenticated = false;
    $rootScope.data = {}; 
    $rootScope.servers = {};
    
    this.loadData = function(){ 
        return $http.get('../../JSON/userList.json')
        .then(function(response) { 
            $rootScope.data = response.data;
            console.log($rootScope.data)
        });
        return $rootScope.data;
    }
        
    console.log($rootScope.data)
    
    this.getServersList = function() {   
        for (i= 0; i< $rootScope.data.servers.length; i++) {
            $rootScope.servers = $rootScope.data.servers[i];
            console.log($rootScope.servers)
        }
        
        return $rootScope.servers;

    }
     
    return this.getServersList();


}]);


app.factory('dataFactory', ['$http', function($http) {

    var url = '../../JSON/userList.json';
    var dataFactory = {};

    dataFactory.getCustomer = function () {
        return $http.get(url);
    };
    dataFactory.getServersList = function() {
    }
   

    return dataFactory;
}]);

*/