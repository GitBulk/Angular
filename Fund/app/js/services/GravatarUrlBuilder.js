'use strict';

app.factory('gravatarUrlBuilder', ['', function(){
	return function createUrl(email){
		var defaultUrl = "http://www.gravatar.com/avatar/000?s=200";
		var regex = /^#/; // email regex

		if (!regex.test(email)) {
			return defaultUrl;
		}

		var md5 = function(input) {
			return "";
		};

		return "http://www.gravatar.com/avatar/" + md5(email) + ".jpg?s=200&r=g";
	};
}])