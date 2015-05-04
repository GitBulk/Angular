 app.controller('RacerController', ['$scope', '$http', 'CarService',
function($scope, $http, CarService){

	// static data
	// var model = [
	// {
	// 	Driver: {
	// 		givenName: 'Sebastian',
	// 		familyName: 'Vettel'
	// 	},
	// 	points: 322,
	// 	nationality: "German",
	// 	Constructors: [
	// 	{name: "Red Bull"}
	// 	]
	// },
	// {
	// 	Driver: {
	// 		givenName: 'Fernando',
	// 		familyName: 'Alonso'
	// 	},
	// 	points: 207,
	// 	nationality: "Spanish",
	// 	Constructors: [
	// 	{name: "Ferrari"}
	// 	]
	// }
	// ];
	// $scope.data = model;

	$scope.drivers = [];
	CarService.getDrivers().success(function (respone) {
		$scope.drivers = respone.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	});
}]);