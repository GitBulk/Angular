// var app = angular.module('myApp', []);
// app.factory('InboxFactory', ['$q', '$http', '$location', function($q, $http, $location){

// 	var exports = {};
// 	exports.getMessage = function(){
// 		return $http.get('json/email.json')
// 		.error(function(date) {
// 			console.log('There was an error ' + data);
// 		});
// 	};
// 	return function InboxFactory(){
// 		return exports;
// 	};
// }]);

//var app = angular.module('myApp', []);
angular.module('myApp')
  .factory('InboxFactory', function InboxFactory($q, $http, $location) {
	var exports = {};
	exports.messages = [];
	exports.getMessage = function () {
		var deferred = $q.defer();
		$http.get('json/email.json')
		.success(function(data){
			console.log(data);
			exports.messages = data;
			deferred.resolve(data);
		})
		.error(function(data) {
			deferred.reject(data);
		});
		return deferred.promise;
	}; // end function getMessage

	exports.goToMessage = function(id) {
		if (angular.isNumber(id)) {
			$location.path('inbox/email/' + id);
		};
	}; // end function goToMessage

	exports.deleteMessage = function(id, index) {
		this.messages.splice(index, 1);
	}; // end function

	return exports;
});