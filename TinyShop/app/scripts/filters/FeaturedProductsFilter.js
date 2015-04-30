'use strict';
/*
 * Get featured products (price >= 500)
 */
app.filter("featuredProductsFilter", function() {
	return function(products) {
		// to do
		var results = [];
		if(angular.isArray(products)) {
			for (var i = 0; i < products.length; i++) {
				if(products[i].price >= 500) {
					results.push(products[i]);
				}
			};
		}
		return results;
	}
});