'use strict';

app.controller('MainController', ['$scope', 'lessonData',
	function($scope, lessonData){
//app.controller('MainController', function($scope, lessonData){
	$scope.event = lessonData.result;

	$scope.likeLesson = function(lesson){
		lesson.likeCount++;
	};

	$scope.dislikeLesson = function(lesson){
		lesson.dislikeCount++;
	};
}]);
//});

