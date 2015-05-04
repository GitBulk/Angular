app.factory('CarService', ['$http', function($http){
	var obj = {};

	obj.getDrivers = function() {
		// to do
		return $http({
			method: "JSONP",
			url: "http://ergast.com/api/f1/2015/driverStandings.json?callback=JSON_CALLBACK"
		});
	}

	obj.getDriverDetails = function(id) {
		return $http({
			method: "JSONP",
			url: "http://ergast.com/api/f1/2015/drivers/"+ id + "/driverStandings.json?callback=JSON_CALLBACK"
		});
	}

	obj.getDriverRaces = function(id) {
		return $http({
			method: "JSONP",
			url: "http://ergast.com/api/f1/2015/drivers/"+ id + "/results.json?callback=JSON_CALLBACK"
		});
	}

	return obj;
}]);