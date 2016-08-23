
//this return list of all users from JSON.
//current size : 5 000 users

app.factory("dataLoader", ['$http',function($http){  
    var data = {};
    
    data.fetchData = function(){ 
        return $http.get('../../JSON/db.json');
    }

 return data;
}]);