angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginController'
    })

    .state('consultas', {
        url: '/page7',
        templateUrl: 'templates/consultas.html',
        controller: 'consultasCtrl'
    })

    .state('confirmacion', {
        url: '/confirmacion',
        templateUrl: 'templates/confirmacion.html',
        controller: 'ConfirmacionController'
    })

    .state('miCuenta', {
        url: '/page11/:pedidoDetalle',
        templateUrl: 'templates/miCuenta.html',
        controller: 'PedidoController',
           resolve: {
            // A string value resolves to a service
            clientRepository: 'clientRepository',
            // A function value resolves to the return
            listOcupacion: function(clientRepository, $stateParams) {
                var pedidoDetalle = $stateParams.pedidoDetalle;
                return $stateParams.pedidoDetalle;
            }
        }
    })

    .state('/lista', {
        url: '/page8',
        views: {
            'side-menu21': {
                templateUrl: 'templates/lista.html',
                controller: 'listaCtrl'
            }
        }
    })

    $urlRouterProvider.otherwise('/login')

});
