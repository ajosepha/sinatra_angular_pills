'use strict';

var pillcatApp = angular.module('pillcatApp', [
  'ngRoute',
  'pillcatControllers'
]);

pillcatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pills', {
        templateUrl: 'partials/pill-list.html',
        controller: 'PillListCtrl'
      }).
      otherwise({
        redirectTo: '/pills'
      });
  }]);

pillcatApp.directive("unHide", function() {
  return function(scope, element, attrs){
                element.on("click", function(){
                  $(this).find(".hormone").toggleClass("hidden");
    });
}});
// Declare app level module which depends on filters, and services

