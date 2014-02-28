'use strict';

var pillcatApp = angular.module('pillcatApp', [
  'ngRoute',
  'pillcatControllers'
]);

pillcatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pills', {
        templateUrl: 'partials/blake.html',
        controller: 'PillListCtrl'
      }).
      otherwise({
        redirectTo: '/pills'
      });
  }]);

// Declare app level module which depends on filters, and services

