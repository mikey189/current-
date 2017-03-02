app.controller("ResetPasswordS1", function($state){
    var self = this;

    self.sendEmail = () => {
        //post here before the request to server and then on success go to login otherwise prompt error message
        $state.go("login");
    }
})