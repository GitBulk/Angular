'use strict';

app.controller('CreateLessonController', ['$scope', function($scope){
	$scope.saveSession = function(session) {
		window.alert("session " + session.name + " saved");
	};

	$scope.cancel = function() {
		window.location = "/DetailSession.html";
	};
}]);