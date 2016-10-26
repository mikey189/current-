app.controller("reports",["filetype", function (filetype) {

    var self = this;
    self.toggler = false;
    
    filetype.getData().then(function(answer){
        self.data = answer.data
    })
    
}])

