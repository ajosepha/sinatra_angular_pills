'use strict';

/* Controllers */

var pillcatControllers = angular.module('pillcatControllers', []);

pillcatApp.controller('PillListCtrl', ['$scope', 'Pillcat', 
    function($scope, Pillcat){
      http.get('http://localhost:9292/pills').success(function(data){
        $scope.pills = data;
      })
    }]

  // function($scope, $http) {
  // $http.get('pills/pills.json').success(function(data){
  //   $scope.pills = data
  // });

  
  // $scope.pills = [
  // {'name': "Apri® ", 'hormone': " Desogestrel, Ethinyl Estradiol"} ,
  // {'name': "Aviane® ", 'hormone': " Ethinyl Estradiol, Levonorgestrel"},
  // {'name': "Azurette® ", 'hormone': " Desogestrel, Ethinyl Estradiol"}
  // ];
});
