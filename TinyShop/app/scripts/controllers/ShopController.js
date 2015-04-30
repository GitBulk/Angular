app.controller('ShopController', ['$scope','$rootScope', function($scope, $rootScope){

	var privateProducts = [
			{ id: "p1", name: "Product 1", description: "Product 1", category: "Cat 1", price: 550, imgSrc: "content/img/products/sample1.jpg", rating: 4, ordinalNumber: 1 },
			{ id: "p2", name: "Product 2", description: "Product 2", category: "Cat 2", price: 600, imgSrc: "content/img/products/sample2.jpg", rating: 3, ordinalNumber: 1 },
			{ id: "p3", name: "Product 3", description: "Product 3", category: "Cat 3", price: 790, imgSrc: "content/img/products/sample3.jpg", rating: 4, ordinalNumber: 1 },
			{ id: "p4", name: "Product 4", description: "Product 4", category: "Cat 4", price: 820, imgSrc: "content/img/products/sample2.jpg", rating: 5, ordinalNumber: 1 },
			{ id: "p5", name: "Product 5", description: "Product 5", category: "Cat 1", price: 100, imgSrc: "content/img/products/sample4.jpg", rating: 4, ordinalNumber: 2 },
			{ id: "p6", name: "Product 6", description: "Product 6", category: "Cat 2", price: 200, imgSrc: "content/img/products/sample5.jpg", rating: 3, ordinalNumber: 3 },
			{ id: "p7", name: "Product 7", description: "Product 7", category: "Cat 3", price: 300, imgSrc: "content/img/products/sample6.jpg", rating: 4, ordinalNumber: 4 },
			{ id: "p8", name: "Product 8", description: "Product 8", category: "Cat 2", price: 400, imgSrc: "content/img/products/sample5.jpg", rating: 2, ordinalNumber: 5 },
			{ id: "p9", name: "Product 9", description: "Product 9", category: "Cat 4", price: 400, imgSrc: "content/img/products/sample4.jpg", rating: 2, ordinalNumber: 6 }
	];

	function pickRandomItems() {
		var numberOfItems = 5;
		var results = [];
		var arrayIndex = [];
		//var cloneProducts = privateProducts.slice();
		if(angular.isNumber(numberOfItems) && numberOfItems > 0) {
			while(true) {
				var randomIndex = Math.floor(Math.random() * privateProducts.length);
				if(arrayIndex.indexOf(randomIndex) === -1){
					arrayIndex.push(randomIndex);
					results.push(privateProducts[randomIndex]);
				}
				if(results.length == numberOfItems){
					break;
				}
			}
		}
		return results;
	}

	$scope.data = {
		products: privateProducts
	};

	// $scope.random = function() {
 //        return 0.5 - Math.random();
 //    }
}]);