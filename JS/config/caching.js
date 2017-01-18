app.config(['$httpProvider', function ($httpProvider) {
    // prevent caching
    $httpProvider.defaults.cache = false;
}])
