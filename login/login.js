app.controller("login",["$rootScope", "authService", function ($rootScope, authService) {

    var self = this;
    
    self.server;

   
  
    
    
    
    
    
/*    function setupAuth(accessToken, remember) {
        var header = 'Bearer ' + accessToken;
        delete $http.defaults.headers.common['Authorization'];
        $http.defaults.headers.common['Authorization'] = header;
        sessionStorage['accessToken'] = accessToken;
        if (remember) {
            localStorage['accessToken'] = accessToken;
        }
        return header;
    }


    function clearAuth() {
        sessionStorage.removeItem('accessToken');
        localStorage.removeItem('accessToken');
        delete $http.defaults.headers.common['Authorization'];
    }


    self.login = function (user, passw, rememberMe) {
        var deferred = $q.defer();
        $http.post(tokenUrl, {
                userName: user,
                password: passw
            })
            .success(function (data) {
                var header = setupAuth(data.accessToken, rememberMe);
                deferred.resolve({
                    userName: data.userName,
                    Authorization: header
                });
            })
            .error(function () {
                deferred.reject();
            });

        return deferred.promise;
    };
*/

}])
