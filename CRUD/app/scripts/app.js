/**
* Todo Module
*
* Description
*/
app = angular.module('crudApp', ['ngRoute', 'ui.bootstrap']);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	 .when('/', {
	    controller: "CrudController",
	    templateUrl: "views/list.html"
	})
	 .otherwise({
	    redirectTo: '/'
	});
}]);