'use strict';

angular.module('myApp.categories', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'categories/index.html',
    controller: 'categoryListController'
  });
}])

.controller('categoryListController', ['$scope', function($scope) {
  $scope.categories = [
    { name: "college%20affordability", safe_name: "College affordability" },
    { name: "economy", safe_name: "Economy" },
    { name: "education", safe_name: "Education" },
    { name: "energy%20and%20environment", safe_name: "Energy and environment" },
    { name: "health%20care", safe_name: "Health care" },
    { name: "middle-class%20tax%20cuts", safe_name: "Middle-class tax cuts" },
    { name: "all", safe_name: "All policies" }
  ];

}]);