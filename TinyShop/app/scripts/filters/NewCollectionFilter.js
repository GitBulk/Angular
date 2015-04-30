'use strict';
/*
 * Get latest products (order by Ordinal Number)
 */
app.filter("newCollectionFilter", function() {
	return function(products) {
		// to do
		var results = [];
		if(angular.isArray(products)) {
			// http://stackoverflow.com/questions/7486085/copying-array-by-value-in-javascript
			var cloneProducts = products.slice();
			cloneProducts.sort(function (a, b) {
				// order by DESC
				return b.ordinalNumber - a.ordinalNumber;

				// order by ASC
				//return b.ordinalNumber - a.ordinalNumber;
			});
			//console.log(products);
			//
			// get first 5 items;
			results = cloneProducts.slice(0, 5);
		}
		return results;
	}
});