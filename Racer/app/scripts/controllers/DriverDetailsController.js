app.controller('DriverDetailsController', ['$scope', '$routeParams', 'CarService',
	function($scope, $routeParams, CarService) {
		$scope.id = $routeParams.id;
		$scope.races = [];
		$scope.driver = {};

		CarService.getDriverDetails($scope.id).success(function(response) {
			//console.log("id: " + $scope.id);
			$scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
			//console.log("getDriverDetails: " + $scope.driver);
		});

		CarService.getDriverRaces($scope.id).success(function(response) {
			//console.log("id: " + $scope.id);
			$scope.races = response.MRData.RaceTable.Races;
			//console.log("getDriverRaces: " + $scope.races);
		});
}]);