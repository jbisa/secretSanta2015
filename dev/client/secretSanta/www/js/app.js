// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('secretSanta', ['ionic', 'secretSanta.controllers', 'secretSanta.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  }); 
})

.config(function($stateProvider, $urlRouteProvider) {
  $stateProvider
    .state('auth', {
      url: "/auth",
      abstract: true,
      templateUrl: "templates/auth.html"
    })
    .state('auth.signin', {
      url: '/signin',
      views: {
        'auth-signin': {
          templateUrl: 'templates/auth-signin.html',
          controller: 'SignInCtrl'
        }
      }
    })
    .state('auth.signup', {
      url: '/singup',
      views: {
        'auth-signup': {
          templateUrl: 'templates/auth-signup.html',
          controller: 'SignUpStrl'
        }
      }
    })
  $urlRouteProvider.otherwise('/auth/signin');
});

/*
.controller('SecretSantaCtrl', function($scope) {
  $scope.users = [
    {
      name: 'Tom Brady',
      email: 'tom.brady@gmail.com'
    },
    {
      name: 'Dion Lewis',
      email: 'dion.lewis@gmail.com'
    },
    {
      name: 'Malcolm Butler',
      email: 'malcolm.butler@gmail.com'
    }
  ];

  // Called when a new user is submitted
  $scope.createUser = function(user) {
    $scope.users.push({
      name: user.name,
      email: user.email
    });

    // Clear the input fields
    user.name = "";
    user.email = "";
  }

  })*/ 
