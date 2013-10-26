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
          controller:  ''
        })
      .when('/login-page',
        { templateUrl: 'partials/login-page.html',
          controller:  'loginPageCtrl'
        })
      .when('/bomber-page',
        { templateUrl: 'partials/bomber.html',
          controller:  ''
        })
      .otherwise({redirectTo: '/'});
}]);
app.controller('loginPageCtrl', function($scope, $location) {
    $scope.users = [];
    $scope.person = {name: ''};

    $scope.addUser = function() {
        $scope.users.push($scope.person);
    }

    console.log($scope.users);
});


