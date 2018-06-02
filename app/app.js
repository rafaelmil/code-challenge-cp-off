

var app = angular.module('MyApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '/app/components/home/home.html'
        })
        .state('users', {
          url: '/users',
          component: 'users'
        })
        .state('about', {
          url: '/about',
          component: 'about'
        })

})
