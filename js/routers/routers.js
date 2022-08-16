app.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'htmls/home.html',
        resolve: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/HomeController.js'); 
        }]
    }).
    when('/mine', {
        templateUrl: 'htmls/mine.html',
        resolve: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/MineController.js');
        }]
    }).
    otherwise({
        redirectTo: '/home'
    });
});