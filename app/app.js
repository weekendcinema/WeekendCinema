var app = angular.module("WcApp", ['ui.router', 'ui.calendar']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'app/components/home/Home.html',
    controller: 'HomeCtrl'
  }).state('post', {
    url: '/post/:postName',
    templateUrl: 'app/components/post/Post.html',
    controller: 'PostCtrl'
  }).state('jukebox', {
    url: '/jukebox',
    templateUrl: 'app/components/jukebox/JukeBox.html',
    controller: 'JukeBoxCtrl'
  }).state('shortfilms', {
    url: '/shortfilms',
    templateUrl: 'app/components/shortfilms/ShortFilm.html',
    controller: 'ShortFilmCtrl'
  }).state('cinemas', {
    url: '/cinemas',
    templateUrl: 'app/components/cinema/CinemaHome.html',
    controller: 'CinemaHomeCtrl'
  }).state('cinema', {
    url: '/cinema/:cinemaName',
    templateUrl: 'app/components/cinema/Cinema.html',
    controller: 'CinemaCtrl'
  }).state('celebrities', {
    url: '/celebrities',
    templateUrl: 'app/components/celebrity/CelebrityHome.html',
    controller: 'CelebrityHomeCtrl'
  }).state('celebrity', {
    url: '/celebrity/:celebrityName',
    templateUrl: 'app/components/celebrity/Celebrity.html',
    controller: 'CelebrityCtrl'
  }).state('calendar', {
    url: '/calendar',
    templateUrl: 'app/components/calendar/CalendarHome.html',
    controller: 'CalendarHomeCtrl'
  });
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
});

app.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]);

app.constant('constants', {
  api: {
    url: '/v1'
  }
});