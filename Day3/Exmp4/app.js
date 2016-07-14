var app = angular.module('TodoApp',[]);

app.controller('AppCtrl',function($scope, TodoFactory) {
	$scope.todos= TodoFactory.get();
	var uid = 0;
	$scope.createTodo = function($event) {
		var keyCode = $event.which || $event.keyCode;
		if (keyCode === 13){
			console.log($scope.todoText);
			var todo = {
				id : uid++,
				text : $scope.todoText,
				isCompleted: false
			}
			$scope.todoText = '';
			$scope.todos.push(todo);
			// console.log($scope.todos);
		}
	}
	$scope.editTodo = function(todo){
		todo.isEditMode = true;
	}
	$scope.saveTodo = function(todo) {
		todo.isEditMode = false;
	}
	$scope.delete = function($index){
		$scope.todos.splice($index, 1);
	}
});

app.controller('HeaderCtrl',function($scope, TodoFactory){
	$scope.todos = TodoFactory.get();
});

app.factory('TodoFactory',function(){
	var todos = [];
	 var API = {
	 	get : function(){
	 		return todos;
	 	}
	 };
	 return API;
});