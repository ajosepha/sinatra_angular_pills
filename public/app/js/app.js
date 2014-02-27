'use strict';

var pillcatApp = angular.module('pillcatApp', [
  'ngRoute',
  'pillcatControllers'
]);

pillcatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pills', {
        templateUrl: 'partials/pill-list.html'
        controller: 'PillListCtrl'
      })
  }])

// Declare app level module which depends on filters, and services

