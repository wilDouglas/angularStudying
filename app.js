var app = angular.module('app', ['ngRoute','ngResource','homeApp','homeServices','showApp']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider,$locationProvider) {
	
	$routeProvider.when('/', {
		templateUrl: 'home/index.html',
		controller: 'homeCtrl'
	})
	.when('/show', {
		templateUrl: 'show/index.html',
		controller: 'showCtrl'
	}).otherwise({ redirectTo: '/' });

	$locationProvider.html5Mode(false).hashPrefix('!');

}]);