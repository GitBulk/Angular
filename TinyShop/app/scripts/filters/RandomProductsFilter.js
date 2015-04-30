'use strict';
/*
 * Get random products
 */
app.filter("randomProductsFilter", function() {

	function pickRandomItems(array, numberOfItems) {
		var cloneArray = [];// array.slice();
		for (var i = 0; i < array.length; i++) {
			cloneArray.push(array[i]);
		};
		var tmp, current, top = array.length;

	    if(top) {
	    	while(--top) {
		    	current = Math.floor(Math.random() * (top + 1));
		    	tmp = cloneArray[current];
		    	cloneArray[current] = cloneArray[top];
		    	cloneArray[top] = tmp;
	    	}
		}
		return cloneArray.slice(0, numberOfItems);
	}

	return function(products) {

		// to do
		var numberOfItems = 5;
		var results = [];
		if(angular.isArray(products) && angular.isNumber(numberOfItems) && numberOfItems > 0) {
			//var tempProducts = angular.copy(products);
			// var tempProducts = products.slice();
			// var count = 0;
			// while(count < numberOfItems) {
			// 	//randomIndex = Math.floor(Math.random() * tempProducts.length);
			// 	//console.log("random index: " + randomIndex);
			// 	results.push(products[randomIndex]);
			// 	//tempProducts.splice(randomIndex, 1);
			// 	//console.log("length:" + tempProducts.length);
			// 	count++;
			// }
			// var cloneProducts = products.slice();
			// while(true) {
			// 	randomIndex = Math.floor(Math.random() * cloneProducts.length);
			// 	if(arrayIndex.indexOf(randomIndex) == -1){
			// 		arrayIndex.push(randomIndex);
			// 		results.push(products[randomIndex]);
			// 	}
			// 	if(results.length === numberOfItems){
			// 		return results;
			// 	}
			// }
			results = pickRandomItems(products, numberOfItems);
		}
		return results;
	}
});