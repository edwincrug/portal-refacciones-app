angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.zARABASBAL1', {
    url: '/pedido',
    views: {
      'side-menu21': {
        templateUrl: 'templates/zARABASBAL1.html',
        controller: 'zARABASBAL1Ctrl'
      }
    }
  })

  .state('menu.zARABASBAL12', {
    url: '/googleMaps',
    views: {
      'side-menu21': {
        templateUrl: 'templates/zARABASBAL12.html',
        controller: 'zARABASBAL12Ctrl'
      }
    }
  })

  .state('menu.zARABASBAL13', {
    url: '/entregar',
    views: {
      'side-menu21': {
        templateUrl: 'templates/zARABASBAL13.html',
        controller: 'zARABASBAL13Ctrl'
      }
    }
  })

  .state('zARABASBAL14', {
    url: '/frimar',
    templateUrl: 'templates/zARABASBAL14.html',
    controller: 'zARABASBAL14Ctrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.lista', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lista.html',
        controller: 'listaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/login')

  

});