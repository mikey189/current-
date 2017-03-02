app.controller("ResetPasswordS2", function () {
    var self = this;
    self.ConfirmNewEmail = () => {
        //wait until server post and then inside success go to login otherwise prompt error message
        $state.go("login");
    }
})