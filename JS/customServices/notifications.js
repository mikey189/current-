app.service("ToastNotifications", function ($mdToast) {
    return {
        SuccessToast: (message) => {
            $mdToast.show({
                hideDelay: 3000,
                position: 'bottom right',
                template: `<md-toast >
  <span  style="color: #00E676; font-weight: 700" flex>` + message + `</span></md-toast>`
            });
        },
        ErrorToast: (message) => {
            $mdToast.show({
                hideDelay: 3000,
                position: 'bottom right',
                template: `<md-toast >
  <span style="color: #FFEA00; font-weight: 700" flex>` + message + `</span></md-toast>`
            });
        }
    }
})