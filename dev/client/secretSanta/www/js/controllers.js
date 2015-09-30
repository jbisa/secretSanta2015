angular.module('secretSanta.controllers', ['secretSanta.services'])

.controller('SignInCtrl', function ($rootScope, $scope, API, $window) {
	// If the user is already logged in, take them to the page which shows them who to buy a present for
	if ($rootScope.isSessionActive()) {
		$window.location.href = ('#/buyPresentFor');
	}

	$scope.user = {
		email: "",
		password: ""
	};

	$scope.validateUser = function () {
		var email = this.user.email;
		var password = this.user.password;

		if (!email || !password) {
			alert("Please enter valid credentials!");
			$rootScope.notify("Please enter valid credentials!");
			return false;
		}

		$rootScope.show("Please wait, authenticating...")

		API.signin({
			email: email,
			password: password
		}).success(function (data) {
			alert(1);
			alert(data);
			$rootScope.setToken(email);
			$rootScope.hide();
			$window.location.href = ('#/buyPresentFor');
		}).error(function (error) {
			$rootScope.hide();
			alert("Invalid username or password!");
			$rootScope.notify("Invalid username or password!");
		});
	}
})

.controller('SignUpCtrl', function ($rootScope, $scope, API, $window) {
	$scope.user = {
		email: "",
		password: "",
		name: ""
	};

	$scope.registerUser = function () {
		var email = this.user.email;
		var password = this.user.password;
		var userName = this.user.name;

		if (!email || !password || !userName) {
			alert("Please enter valid information!");
			$rootScope.notify("Please enter valid information!");
			return false;
		}

		$rootScope.show("Please wait, registering...");

		API.signup({
			email: email,
			password: password,
			name: userName
		}).success(function (data) {
			$rootScope.setToken(email);
			$rootScope.hide();
			$window.location.href = ('#/buyPresentFor');
		}).error(function (error) {
			$rootScope.hide();
			alert("Uh ohh, something went wrong...please try again!");
			$rootScope.notify("Uh ohh, something went wrong...please try again!");
		});
	}
})