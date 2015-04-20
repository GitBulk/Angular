'use strict';

app.controller('ProfileController', ['$scope', 'gravatarUrlBuilder',
	function($scope, gravatarUrlBuilder){
		$scope.user = {
			email: ""		
		};

		$scope.getImageUrl = function(email) {
			return gravatarUrlBuilder.getImageUrl(email);
		};
	}]);