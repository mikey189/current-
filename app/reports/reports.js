app.controller("reports", function (reports_factory, $mdSidenav) {
        var self = this;
        reports_factory.get_menu().then(function (answer) {
            self.menu = answer.data
        })
        self.toggleSidenav = () => {
            $mdSidenav("left").toggle();

        }
    })
    // url to insert app.reports_scanners