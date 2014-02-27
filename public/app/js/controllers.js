'use strict';

/* Controllers */

var pillcatControllers = angular.module('pillcatControllers', []);

pillcatApp.controller('PillListCtrl', ['$scope', '$http', 
    function($scope, $http){
      $http.get('http://localhost:9393/pills').success(function(data){
        $scope.pills = data;
      });
    // $scope.pills = Pillcat.query();
    }]);

  // function($scope, $http) {
  // $http.get('pills/pills.json').success(function(data){
  //   $scope.pills = data
  // });

// });

pillcatApp.controller('PillDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get("pills/pills-" + $routeParams.catId + '.json').success(function(data) {
      $scope.pill = data[0];
    });

   
  }]);
