//var app = angular.module('myApp', []);
app.directive('inbox', ['', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: true, // {} = isolate, true = child, false/undefined = no change
		controller: function(InboxFactory) {
			this.messages = [];
			this.goToMessage = function(id) {
				InboxFactory.goToMessage(id);
			};
			this.deleteMessage = function(id, index) {
				InboxFactory.deleteMessage(id, index);
			};
			InboxFactory.getMessage().then(angular.bind(this, function then() {
				this.messages = InboxFactory.messages;
			}));
		},
		controllerAs: 'inbox',
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'js/directives/inbox.tmpl.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

		}
	};
}]);