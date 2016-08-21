
//this return list of all users from JSON.
//current size : 5 000 users

app.factory('getUsers', function($http) {
  var userList = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
    var url = '../../JSON/userDir.json';
      var promise = $http.get(url).then(function (response) {
        // The then function here is an opportunity to modify the response
        
          var data = response.data;
        // The return value gets picked up by the then in the controller.
        return data;
      });
      // Return the promise to the controller
      return promise;
    }
  };
  return userList;
});