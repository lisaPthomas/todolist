//creating module myApp to handle todo controllers
myApp = angular.module('myApp', []);



myApp.controller('MainController', ['$scope', function($scope) {

    $scope.todos = [];

    $scope.addTodo = function() {
        $scope.todos.push({ 'text': $scope.text, 'priority': $scope.priority });
        $scope.text = '';
        $scope.priority = '';
    };

    $scope.clearCompleted = function() {
        $scope.todos = _.filter($scope.todos, function(todo) {
            return !todo.done;
        });
    };

    // //add function for deleting list
    $scope.deleteTodo = function(item) {
        var index = $scope.todos.indexOf(item);
        $scope.todos.splice(index, 1);

    };


}])
