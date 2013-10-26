'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
                                    'ngRoute',
                                    'myApp.filters',
                                    'myApp.services',
                                    'myApp.directives',
                                    'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/',
        { templateUrl: 'partials/start-page.html',
          controller:  'startCtrl'
        })
      .when('/login-page',
        { templateUrl: 'partials/login-page.html',
          controller:  'loginPageCtrl'
        })
      .when('/bomber-page',
        { templateUrl: 'partials/bomber.html',
          controller:  'bomberCtrl'
        })
      .otherwise({redirectTo: '/'});
}]);

app.controller('startCtrl', function($scope, $location) {
    $scope.goToLoginPage = function() {
        $location.path('/login-page');
    };
});

