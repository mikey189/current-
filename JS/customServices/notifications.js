app.service("ToastNotifications", function ($mdToast) {
    return {
        SuccessToast: (message) => {
            $mdToast.show(
                $mdToast.simple()
                .textContent(message)
                .position("bottom right")
                .hideDelay(3000)
            );
        },
        ErrorToast: (message) => {
            $mdToast.show({
                hideDelay: 3000,
                position: 'bottom right',
                template: `<md-toast style="color: #FFEA00; font-weight: 700">
  <span class="error-message" flex>` + message + `</span></md-toast>`
            });
        }
    }
})