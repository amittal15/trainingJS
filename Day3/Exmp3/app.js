var app = angular.module('EditApp',[]);

app.controller('AppCtrl', function($scope){
	$scope.myName = 'Ankur';

	function toggle(){
		$scope.isEditMode= !$scope.isEditMode;
	}
	$scope.toggle= toggle;
});