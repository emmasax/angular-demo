'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.categories',
  'myApp.policies',
  'policyControllers',
  'policyServices',
  'ngResource'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/policies/:type/:category', {templateUrl: 'policies/index.html', controller: 'policyListController'}).
    otherwise({redirectTo: '/'});
}])

.filter('titleCase', function() {
  return function(s) {
    s = ( s === undefined || s === null ) ? '' : s;
    return s.toString().toLowerCase().replace( /\b([a-z])/g, function(ch) {
      return ch.toUpperCase();
    });
  };
});

var policyControllers = angular.module('policyControllers', []);
policyControllers.controller('policyListController', ['$scope', '$route', 'PolicyService', function($scope, $route, PolicyService) {
  var paramType = $route.current.params.type,
      paramCategory = $route.current.params.category;
  $scope.policies = PolicyService.query(paramCategory, paramType);
  $scope.category = paramCategory;
  $scope.type = paramType;
}]);

var policyServices = angular.module('policyServices', ['ngResource']);
policyServices.factory('PolicyService', ['$resource', function($resource) {
  return {
    query: function(cat, type) {
      return $resource('http://whitehouse.gov/facts/json/' + type + '/' + cat, {}, {
        query: {method: 'GET', isArray: true }
      }).query();
    }
  }
}]);