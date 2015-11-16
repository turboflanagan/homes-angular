var myApp = angular.module('myApp', []);
myApp.controller('myController', housesListCrl);


	function housesListCrl($scope){

	var index = 1;
	$scope.houses = [houses[0]]

	$scope.addHouse = function(){
		$scope.houses.push(houses[index++])
	}
	$scope.enableAdd = function(){
		return index < houses.length;
	}

	$scope.removeHouses = function(){
		$scope.houses = [];
		index = 0;
	}
	};

