app.service('CarService', ['$http', function($http){
	this.getDrivers = function() {
		// to do
		return $http({
			method: "JSONP",
			url: "http://ergast.com/api/f1/2015/driverStandings.json?callback=JSON_CALLBACK"
		});
	}

	this.getDriverDetails = function(id) {
		return $http({
			method: "JSONP",
			url: "http://ergast.com/api/f1/2015/drivers/"+ id + "/driverStandings.json?callback=JSON_CALLBACK"
		});
	}

	this.getDriverRaces = function(id) {
		return $http({
			method: "JSONP",
			url: "http://ergast.com/api/f1/2015/drivers/"+ id + "/results.json?callback=JSON_CALLBACK"
		});
	}
}]);