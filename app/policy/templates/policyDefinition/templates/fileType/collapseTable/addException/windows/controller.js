app.controller("windowsEXEException", ['$mdDialog', function($mdDialog){
    this.test = "test ici";
    this.closeDialog = function(){
        $mdDialog.hide();
    }
    
    this.cancel =
        
        function(){
        $mdDialog.cancel();
        
    }
    
    this.sizeLimit = 1;
    this.process = true;
    this.sandbox = false;
    this.users = [];
    this.usersReadOnly = false;
    this.computers = [];
    this.computersReadOnly = false;
    this.groups = [];
    this.groupsReadOnly = false;
    
}])
