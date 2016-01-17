// app.js
var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'partials/partial-home.html'
    })

            .state('info', {
                url: '/info',
                templateUrl: 'partials/partial-info.html',
                controller: 'infoController'
            })

            .state('supermarket', {
                url: '/supermarket',
                templateUrl: 'partials/partial-supermarket.html',
                controller: 'superController'
            })

            .state('vegetables', {
                url: '/vegetables',
                templateUrl: 'partials/partial-vegetables.html',
                controller: ''
            })

            .state('statistics', {
                url: '/statistics',
                templateUrl: 'partials/partial-statistics.html',
                controller: 'statisticsController'

            })

            .state('statistics.sex', {
                templateUrl: 'partials/partial-statistics.chart.html',
                controller: 'chartController'
            })

            .state('statistics.age', {
                templateUrl: 'partials/partial-statistics.chart.html',
                controller: 'chartController'
            });
});

app.controller('mainController', function ($scope) {
    $scope.hello = "hello";
    $scope.cart = {
        "user": $scope.user,
        "items": [],
        "total": 0,
        "failed": false
    };
    $scope.user = {};
    //$scope.user;
})

        .controller('home', ['$scope', function ($scope) {

            }]);
