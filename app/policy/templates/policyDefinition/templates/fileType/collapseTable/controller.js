app.controller("PDCollapseTable", ['$mdDialog', function ($mdDialog) {

    this.th = ["Allow", "Size Limit", "Transform", "Process Embbeded files", "Sandbox", "Exception"]


    this.showAdvanced = function (ev) {
        $mdDialog.show({
                templateUrl: 'app/policy/templates/policyDefinition/templates/fileType/collapseTable/addException/windows/exe.html',
                parent: angular.element(document.querySelector("#PDCollapseTable")),
                targetEvent: ev,
                clickOutsideToClose: false
                //fullscreen: true // Only for -xs, -sm breakpoints.
            })
            .then(function (answer) {
                this.status = 'You said the information was "' + answer + '".';
            }, function () {
                this.status = 'You cancelled the dialog.';
            });
        

    };
   

    this.windows = [
        {
            "EXE": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["N/A"]

            }

            ],
            "JPG": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "PNG": [
                {
                    "isAllowed": false,
                    "sizeLimit": 1.1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "XLS": [
                {
                    "isAllowed": false,
                    "sizeLimit": 870 + "KB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
            "CSV": [
                {
                    "isAllowed": false,
                    "sizeLimit": 900 + "KB",
                    "process": false,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
        }



        ]



    this.mac = [
        {
            "DMG": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["N/A"]

            }

            ],
            "JPG": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "PNG": [
                {
                    "isAllowed": false,
                    "sizeLimit": 1.1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "XLS": [
                {
                    "isAllowed": false,
                    "sizeLimit": 870 + "KB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
            "CSV": [
                {
                    "isAllowed": false,
                    "sizeLimit": 900 + "KB",
                    "process": false,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
        }



        ]


    this.linux = [
        {
            "ELF": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["N/A"]

            }

            ],
            "JPG": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "PNG": [
                {
                    "isAllowed": false,
                    "sizeLimit": 1.1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "XLS": [
                {
                    "isAllowed": false,
                    "sizeLimit": 870 + "KB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
            "CSV": [
                {
                    "isAllowed": false,
                    "sizeLimit": 900 + "KB",
                    "process": false,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
        }



        ]


    this.java = [
        {
            "JAR": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["N/A"]

            }

            ],
            "JPG": [
                {
                    "isAllowed": true,
                    "sizeLimit": 1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "PNG": [
                {
                    "isAllowed": false,
                    "sizeLimit": 1.1 + "MB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "Transform & Sign", "Tranform, sign & blur"]

            }

            ],
            "XLS": [
                {
                    "isAllowed": false,
                    "sizeLimit": 870 + "KB",
                    "process": true,
                    "sandbox": false,
                    "exception": false,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
            "CSV": [
                {
                    "isAllowed": false,
                    "sizeLimit": 900 + "KB",
                    "process": false,
                    "sandbox": false,
                    "exception": true,
                    "transform": ["None", "XLS -> PDF", "Standard", "Custom"]

            }

            ],
        }



        ]


}])
