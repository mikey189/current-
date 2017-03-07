app.controller("ResetPasswordS2", function ($state, $mdDialog,accountMgmt_factory,$location) {
    var self = this;
    self.showPassword1 = true;
    self.showPassword2 = true;

    self.ConfirmNewEmail = (newPassword) => {
        //get query string and resolve server url and token
        var searchObject = $location.search();
        //if one of the parameters is not available then reject
        if(searchObject['s']==null||searchObject['k']==null)alert('token or sever addres is undefined');

        //call service
        accountMgmt_factory.PostResetPassword(newPassword,searchObject['k'],searchObject['s'])
        //wait until server post and then inside success go to login otherwise prompt error message
        $state.go("login");
    }
})
