//theming angular material //

app.config(function ($mdThemingProvider) {
  $mdThemingProvider.definePalette('ResecPalette', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'f44336',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'E3F2FD',
    'A200': '0D47A1',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light', // whether, by default, text (contrast)
    // on this palette should be dark or light

    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
      '200', '300', '400', 'A100'
    ],
    'contrastLightColors': undefined // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple', {
      'default': '900',
      'hue-1': '900'
    })
    .accentPalette("ResecPalette");
});

app.config(function ($mdIconProvider) {
  $mdIconProvider
    .iconSet('resec', 'IMG/icons/resecLogo.svg', 24)
});

app.config(['ChartJsProvider', function (ChartJsProvider) {
  // Configure all charts 
  ChartJsProvider.setOptions({
    chartColors: ['#2D90EA', '#E19F2F', '#E43754']
  });
}]);