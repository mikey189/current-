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

