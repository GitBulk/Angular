app.controller('TodoController', ['$scope', '$http',
	function($scope, $http){

	// var model = {
	// 	user: "Toan",
	// 	items: [
	// 		{ action: "Buy flowers", done: false },
	// 		{ action: "Watch movie", done: false },
	// 		{ action: "Call Ronaldo", done: true }
	// 	]
	// };
	//$scope.data = model;

	$http.get("content/data/todo.json").success(function(data) {
		$scope.data.items = data;
	});

	$scope.todos = {};

	$scope.data = {
		user: "Toan",
		items: []
	};

	$scope.descriptionAction = "";
	$scope.isUseListView = false;
	
	/*
	*/
	$scope.addNewItem = function() {
		$scope.data.items.push({ action: $scope.descriptionAction, done: false });
		$scope.descriptionAction = "";
	}

	$scope.warningLevel = function() {
		return $scope.countIncompleteAction() < 3 ? "label-success" : "label-danger";
	}

	/*
	item: an object action in todo.json file.
	 */
	$scope.completeActionStatus = function(item) {
		return item.done == true ? "completeAction" : "";
	}

	$scope.countIncompleteAction = function() {
		var count = 0;
		$scope.data.items.forEach(function(element, index){
			if(!element.done){
				count++;
			}
		});
		//console.log('count: ' + count);
		return count;
	}

	$scope.getTodoList = function() {
		$http.get("content/data/todo.json").success(function(data) {
			$scope.todos.items = data;
		});
	}

	$scope.viewFile = function() {
		return $scope.isUseListView ? "views/list.html" : "views/table.html";
	}

}]);