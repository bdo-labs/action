
/**
 * Module dependencies.
 */
var angular = require('angular');
var empty = require('is-empty');
var path = require('path');
require('ng-flow');
require('placeholder');

/**
 * Expose TaskView.
 */
var TaskView = module.exports = angular.module('taskView', ['flow', 'placeholder']);

/**
 * Add partials to `$templateCache`.
 */
TaskView.run(['$templateCache', function($templateCache){
  $templateCache.put('form.html', require('./partials/form.html'));
}]);

/**
 * Controller.
 *
 * TODO Move to the parent component `task`
 */
TaskView.controller('TaskController', ['$scope', function($scope){
  var task = $scope.task = {};
  $scope.basename = path.basename;
  $scope.extname = path.extname;
  $scope.now = new Date().toISOString();
  $scope.isNew = empty(task);
}]);

