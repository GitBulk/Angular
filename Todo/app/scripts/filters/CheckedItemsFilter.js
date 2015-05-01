app.filter("checkedItemsFilter", function() {
	/*
	items: array
	showComplete: bool
	return an array with same array items's type
	 */
	return function(items, showComplete) {
		// to do
		var resultArr = [];
		items.forEach(function(element, index){
			if(element.done == false || showComplete == true){
				resultArr.push(element);
			}
		});
		return resultArr;
	}
});