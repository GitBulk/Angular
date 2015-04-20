'use strict';
app.factory('gravatarUrlBuilder', function(){

	return {
		getImageUrl : function(email){
			var defaultUrl = "http://www.gravatar.com/avatar/000?s=200";
		var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;; // email regex

		if (!regex.test(email)) {
			return defaultUrl;
		}
		var hash = CryptoJS.MD5(email);
		console.log("md5:" + hash);

		return "http://www.gravatar.com/avatar/" + hash + ".jpg?s=200&r=g";	
	}
}
});