/*
 * Get unique category from product catalog
 */
 app.filter("UniqueArrayFilter", function() {
 	return function(products, propertyName) {
 		if(angular.isArray(products) && angular.isString(propertyName)) {
 			var results = [];
 			var keys = {};
 			for (var i = 0; i < products.length; i++) {
 				var val = products[i][propertyName];
 				if(angular.isUndefined(keys[val])) {
 					keys[val] = true; // create a property for object keys. set true or any value to achieve that.
 					results.push(val);
 				}
 			}
 			return results;
 		}
 		return products;
 	}
 });