app.controller('ShopController', ['$scope', function($scope){
	$scope.data = {
		products: [
			{ name: "Product 1", description: "Product 1", category: "Cat 1", price: 100 },
			{ name: "Product 2", description: "Product 2", category: "Cat 1", price: 200 },
			{ name: "Product 3", description: "Product 3", category: "Cat 3", price: 300 },
			{ name: "Product 4", description: "Product 4", category: "Cat 4", price: 400 }
		]
	};
}]);


