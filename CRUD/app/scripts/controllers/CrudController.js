app.controller('CrudController', ['$scope', '$http', '$modal',
	function($scope, $http, $modal){

	$scope.items = ['item1', 'item2', 'item3'];

	$scope.animationsEnabled = true;

	$scope.alerts = [];

	$scope.players = [
		{ name: "Ronaldo", team: "Real Madrid", age: 30 },
		{ name: "Messi", team: "Barca", age: 26 },
		{ name: "Rooney", team: "MU", age: 28 },
	];

	$scope.open = function(size) {
		var modalDialog = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: "player_modal.html",
			controller: "ModalPlayerController",
			// resolve: {
			// 	items: function() {
			// 		return $scope.items;
			// 	}
			// }
		});
	}

}]);

app.controller('ModalPlayerController', ['$scope', '$modalInstance', 
	function($scope, $modalInstance) {

	$scope.player = {
		fullName: "",
		team: "",
		age: 0
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	}

	$scope.save = function() {
		console.log($scope.player);
	}
}]);