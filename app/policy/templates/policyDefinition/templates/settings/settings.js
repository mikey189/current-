app.controller('policySettings', function($mdDialog){
    
    this.test = "wow"
    console.log("inside settings controller")
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
      templateUrl: 'app/policy/templates/policyDefinition/settings/mailSubject/mailSubject.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: this.customFullscreen // Only for -xs, -sm breakpoints.
    })
  };
  
})