// ROUTES
app.config(function ($routeProvider) {
   
    $routeProvider
        
   
    .when('/agentManagement', {
        templateUrl: './VIEWS/agentManagement/agentManagement.html',
        controller: 'agentManagement'
    })
    
     .when('/cases', {
        templateUrl: './VIEWS/cases/cases.html',
        controller: 'cases'
    })
    
     .when('/channelManagement', {
        templateUrl: './VIEWS/channelManagement/channelManagement.html',
        controller: 'channelManagement'
    })
    
     .when('/clusterManagement', {
        templateUrl: './VIEWS/clusterManagement/clusterManagement.html',
        controller: 'clusterManagement'
    })
    
     .when('/dashboard', {
        templateUrl: './VIEWS/dashboard/dashboard.html',
        controller: 'dashboard'
    })
    
     .when('/policy', {
        templateUrl: './VIEWS/policy/policy.html',
        controller: 'policy'
    })
    
     .when('/reports', {
        templateUrl: './VIEWS/reports/reports.html',
        controller: 'reports'
    })
    
     .when('/homeController', {
        templateUrl: './VIEWS/agentsManagement/agentsManagement.html',
        controller: 'homeController'
    })
    
     .when('/settings', {
        templateUrl: './VIEWS/settings/settings.html',
        controller: 'settings',
        controllerAs: 'settingCtrl'
    })
    .when('/sampleChips', {
        templateUrl: './VIEWS/policy/sample.html',
        controller: 'ContactChipDemoCtrl'
    })
});

//theming angulat material //

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple', {
  
      'default': '900',
      'hue-1': '900'
  })
    .accentPalette('orange');
});


//multilanguage config

app.config(['$translateProvider', function($translateProvider) {

  $translateProvider
  
  //specifying where are the translations files to load
   
   .useStaticFilesLoader({
    prefix: '/translations/',
    suffix: '.json'
  })
  .preferredLanguage('en')
  .useMissingTranslationHandlerLog()
  
  //for security purpose I use sanitization value of escape as the other one is not stable (see doc : https://angular-translate.github.io/docs/#/guide/19_security)//
  
  .useSanitizeValueStrategy('escape');
}]);


