app.controller("ResetPasswordS1", function ($state, $mdDialog) {
    var self = this;

    self.sendEmail = () => {
        //post here before the request to server and then on success go to login otherwise prompt error message


        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
            .title('Confirm your email')
            .textContent('You will now receive an email containing a link to reset your password, your current password will no longer be valid')
            .ariaLabel('change password')
            .ok('CONFIRM')
            .cancel('CANCEL');

        $mdDialog.show(confirm).then(function () {
            //make post here
            $state.go("login");
        }, function () {
            $state.go("login");
        });

    }
})