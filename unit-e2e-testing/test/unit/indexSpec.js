'use strict';

describe('MainCtrl', function () {
	beforeEach(module('index'));

	it('should assign the correct name to scope', inject(function ($controller) {
		var $scope = {};
		$controller('MainCtrl', {
			$scope: $scope
		});
		expect($scope.name).toEqual('Hello');
	}));
	it('should assign the names to the users', inject(function ($controller) {
		var $scope = {};
		$controller('MainCtrl', {
			$scope: $scope
		});
		expect($scope.users).toEqual([]);
	}));

	it('should assign scope the array to scope users on click',inject(function ($controller) {
		var $scope = {};
		$controller('MainCtrl', {
			$scope: $scope
		});
		$scope.onLoadUsers();
		expect($scope.users).toEqual(["Hello","World","Angular"]);
	}));
	it('should assign the empty list to scope users on click',inject(function ($controller) {
		var $scope = {};
		$controller('MainCtrl', {
			$scope: $scope
		});
		$scope.onLoadUsers();
		$scope.removeUsers();
		expect($scope.users).toEqual([]);
	}));
});
