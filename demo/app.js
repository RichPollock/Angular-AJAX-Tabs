'use strict';

var AJAXTabsDemo = angular.module("AJAXTabsDemo", [
  "ngRoute",
  "ngAJAXTabs",
  "controllers"
]).config(["$routeProvider", "$locationProvider",
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when("/pane-1", {
      controller: "Pane1",
      templateUrl: "pane-1.html"
    }).
    when("/pane-2", {
      controller: "Pane2",
      templateUrl: "pane-2.html"
    }).
    when("/pane-3", {
      controller: "Pane3",
      templateUrl: "pane-3.html"
    }).
    otherwise({
      redirectTo: "/pane-1"
    })
  }
])

var controllers = angular.module("controllers", []).run(function($rootScope) {
  $rootScope.panes = [{
    "name": "Pane 1",
    "path": "pane-1",
    "partial": "pane-1.html",
    "controller": "Pane1",
    "includedInTabView": true
  }, {
    "name": "Pane 2",
    "path": "pane-2",
    "partial": "pane-2.html",
    "controller": "Pane2",
    "includedInTabView": true
  }, {
    "name": "Pane 3",
    "path": "pane-3",
    "partial": "pane-3.html",
    "controller": "Pane3",
    "includedInTabView": false
  }];
}).controller("Pane1", function($scope) {
  $scope.textFromControllerScope = "Foo";
}).controller("Pane2", function($scope) {
  $scope.textFromControllerScope = "Bar";
}).controller("Pane3", function($scope) {
  /* Pane3 controller functionality */
})