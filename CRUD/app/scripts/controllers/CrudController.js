app.controller('CrudController', ['$scope', '$http',
	function($scope, $http){

	$scope.alerts = [];

	$scope.players = [
		{ name: "Ronaldo", team: "Real Madrid", age: 30 },
		{ name: "Messi", team: "Barca", age: 26 },
		{ name: "Rooney", team: "MU", age: 28 },
	];

}]);