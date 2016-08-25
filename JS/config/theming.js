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
