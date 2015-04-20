'use strict';
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/md5.js"></script>

app.factory('gravatarUrlBuilder', ['', function(){
	return function createUrl(email){
		var defaultUrl = "http://www.gravatar.com/avatar/000?s=200";
		var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;; // email regex

		if (!regex.test(email)) {
			return defaultUrl;
		}

		var hash = CryptoJS.MD5(email);
		console.log(hash);

		return "http://www.gravatar.com/avatar/" + hash + ".jpg?s=200&r=g";
	};
}])