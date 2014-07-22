
/**
 * Module dependencies.
 */
var angular = require('angular');
var empty = require('is-empty');
var path = require('path');
require('ng-flow');
require('placeholder');

/**
 * Expose action.
 */
var action = module.exports = angular.module('action', ['flow', 'placeholder']);

/**
 * Add partials to `$templateCache`.
 */
action.run(['$templateCache', function($templateCache){
  $templateCache.put('form.html', require('./partials/form.html'));
}]);

/**
 * Controller.
 */
action.controller('ActionController', ['$scope', function($scope){
  var action = $scope.action = {};
  $scope.basename = path.basename;
  $scope.extname = path.extname;
  $scope.now = new Date().toISOString();
  $scope.isNew = empty(action);
}]);

