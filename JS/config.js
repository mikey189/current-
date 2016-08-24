// ROUTES
app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'login/login.html',
            controller: 'login',
            controllerAs: 'login'
            })
    
        .state('app', {
           url: '/app', templateUrl:'app/common/common.html',
            controller: 'common',
            controllerAs: 'common'
        })
        .state('app.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'dashboard'
        })
        .state('app.agentManagement', {
            url: '/agentManagement',
            templateUrl: 'app/agentManagement/agentManagement.html',
            controller: 'agentManagement',
            controllerAs: 'agentManagement'
        })
        .state('app.cases', {
            url: '/cases',
            templateUrl: 'app/cases/cases.html',
            controller: 'cases',
            controllerAs: 'cases'
        })
        .state('app.channelManagement', {
            url: '/channelManagement',
            templateUrl: 'app/channelManagement/channelManagement.html',
            controller: 'channelManagement',
            controllerAs: 'channelManagement'
        })
        .state('app.clusterManagement', {
            url: '/clusterManagement',
            templateUrl: 'app/clusterManagement/clusterManagement.html',
            controller: 'clusterManagement',
            controllerAs: 'clusterManagement'
        })
     
        .state('app.policy', {
            url: '/policy',
            templateUrl: 'app/policy/policy.html',
            controller: 'policy'
        })
        .state('app.reports', {
            url: '/reports',
            templateUrl: 'app/reports/reports.html',
            controller: 'reports',
            controllerAs: 'reports'
        })
        .state('app.settings', {
            url: '/settings',
            templateUrl: 'app/settings/settings.html',
            controller: 'settings',
            controllerAs: 'settings'
        })
   
    
})


//theming angular material //

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple', {
  
      'default': '900',
      'hue-1': '900'
  })
    .accentPalette('orange');
});

//adding resec logo


app.config(function($mdIconProvider) {
    $mdIconProvider
       .iconSet('resec', 'IMG/icons/resecLogo.svg', 24)
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

/*
(function() {
  'use strict';

  var module = angular.module('resec', ['ui.router']);

  module.config(appConfig);

  appConfig.$inject = ['$stateProvider'];

  function appConfig($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        data: {
          noAuth: true
        },
        templateUrl: 'app/modules/profile/auth/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('app.profile', {
        url: '/profile',
        templateUrl: 'app/modules/profile/edit/edit.html',
        controller: 'ProfileController',
        controllerAs: 'vm'
      });
  }
})();


.state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/modules/dashboard/dashboard.html',
        resolve: {
          posts: ['postResource', function(postResource) {
            return postResource.query().$promise;
          }]
        },
        controller: 'dashboardController',
        controllerAs: 'vm'
      })





*/