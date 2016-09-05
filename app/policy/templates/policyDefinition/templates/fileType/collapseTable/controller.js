app.controller("PDCollapseTable", ['$mdDialog', '$scope', function ($mdDialog, $scope) {

    this.th = ["Allow", "Size Limit", "Transform", "Process Embbeded files", "Sandbox", "Exception"];


    //initiate $scope.clickedID to recover the value from the click and pass it to the exeption window template
    $scope.clickedID;
    /*getting the id from the click element and storing on the $scope to pass it to the exception window*/
    angular.element(document).find('.getID').click(function () {
        $scope.clickedID = this.id;
        $scope.transform = function(){
            $scope.filterID = $scope.clickedID.split(".");
            $scope.os = $scope.filterID[0];
            $scope.extension = $scope.filterID[1].toUpperCase();
            return $scope.os;
            return $scope.extension;
        }
        $scope.transform();
        console.log($scope.clickedID);
        return $scope.clickedID;
        
    });


    //defining the method to pop up the excpetion window//

    this.showAdvanced = function (ev) {

        $mdDialog.show({
                templateUrl: 'app/policy/templates/policyDefinition/templates/fileType/collapseTable/addException/windows/exe.html',
                parent: angular.element(document.querySelector("#PDCollapseTable")),
                targetEvent: ev,
                clickOutsideToClose: true,
                //exception window will inherit of the scope of this controller//
                scope: $scope,
                //if preserveScope is not present, then $mdDialog will only open once and will not reopen after being closed DO NOT REMOVE
                preserveScope: true

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
