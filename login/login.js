app.controller('login', function(dataLoader){
     dataLoader.fetchData().success(function(response){
        var dataSet = response;
        var servers = dataSet.servers;
        var server1 = servers[000];
        var id = server1["id"];
         console.log(servers)
    });
})