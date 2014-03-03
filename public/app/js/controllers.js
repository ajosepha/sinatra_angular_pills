'use strict';

/* Controllers */

var pillcatControllers = angular.module('pillcatControllers', []);

pillcatApp.controller('PillListCtrl', ['$scope', '$http', 
    function($scope, $http){
      $http.get('/pills').success(function(data){
        $scope.pills = data;
      });

    
    }]);


