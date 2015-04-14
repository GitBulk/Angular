angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/inbox', {
		templateUrl: 'views/inbox.html',
		controller: 'InboxController',
		controllerAs: 'inbox'
	})
	.otherwise({
		redirectTo: '/inbox'
	});
}]);