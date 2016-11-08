app.controller('policySettings', function($mdDialog, $scope){
    
    this.signFiles = true
    this.blockedFiles = false
    this.incorrectExtensions = false
    this.nestingLevel = 3
    this.emailReports = true
    this.emailCondition = ['Always', 'on sanitization block or failure', 'on sanitization block or modified']
    this.emailConditionStatus
    this.userEmail
    
    //edit email structure modal //
    
    this.status = '  ';
    this.customFullscreen = false;
    this.showAdvanced = function(ev) {
    $mdDialog.show({
      templateUrl: 'app/policy/templates/policyDefinition/templates/settings/mailSubject/mailSubject.html',
      parent: angular.element(document.querySelector("#policySettingsContainer")),
      targetEvent: ev,
      clickOutsideToClose:true,
        scope: $scope,
                //if preserveScope is not present, then $mdDialog will only open once and will not reopen after being closed DO NOT REMOVE
        preserveScope: true,
      fullscreen: this.customFullscreen // Only for -xs, -sm breakpoints.
    })
     $scope.closeDialog = function () {
        $mdDialog.hide();

    }
    
  };
  
})