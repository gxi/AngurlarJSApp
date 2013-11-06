/* Controllers */

var controllers = angular.module('firstapp', []);

controllers.controller('bodycontroller', 
  function ($scope) {
    $scope.name = "Felix";
  });