app.filter("searchDriverNameFilter", function() {
	/*
	drivers: array
	text: string. Text to search
	return an array drivers
	 */
	return function(drivers, text) {
		// to do
		//console.log('search');
		var resultArr = [];
		drivers.forEach(function(element, index){
			var keyWork = new RegExp(text, 'i');
			if(keyWork.test(element.Driver.givenName) || keyWork.test(element.Driver.familyName)){
				resultArr.push(element);
			}
		});
		return resultArr;
	}
});