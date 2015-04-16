'use strict';

app.controller('CreateProfileController', ['$scope', 'gravatarUrlBuilder', function($scope, gravatarUrlBuilder){
	$scope.user = {};
	$scope.getAvatarUrl = function(email) {
		return gravatarUrlBuilder.createUrl(email);
	};
}]);