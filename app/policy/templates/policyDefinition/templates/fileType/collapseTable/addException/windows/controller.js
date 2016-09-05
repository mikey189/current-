app.controller("windowsEXEException", ['$mdDialog', '$scope', function ($mdDialog, $scope) {
    this.test = "test ici";

    this.cancel =

        function () {
            $mdDialog.cancel();

        }
    this.title = "Add an Exception";
    this.sizeLimit = 1;
    this.process = true;
    this.sandbox = false;
    this.users = [];
    
    this.usersReadOnly = false;
    this.computers = [];
    this.computersReadOnly = false;
    this.groups = [];
    this.groupsReadOnly = false;
    this.os = $scope.os;
    this.extension = $scope.extension;
    
    
    this.exceptionItems = function(){
        this.items =  {"context": $scope.clickedID, users: this.users, "groups": this.groups, "computers": this.computers}
        console.log(this.items)
        return this.items;
    }
    
    
    this.closeDialog = function () {
        $mdDialog.hide();
        this.exceptionItems();

    }

}])
