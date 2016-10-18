appControllers.controller('loginController', function($scope, $rootScope, $ionicPopup, $ionicLoading, $state, $cookies, loginRepository, clientRepository, alertFactory, sessionDBO, clientDBO, User) {

    $scope.usuario = this;
    $rootScope.Usuario = [];
    $rootScope.datosPedidos = [];
    $rootScope.token_app = "";
    //Inicio Sesión
    $scope.Login = function() {
        //Inicio sesión
        var currentUser = {};
        $ionicLoading.show({
            template: 'Iniciando Sesión...'
        });

        //FAL logon del usuario y lleno la variable usuario con todos sus datos
        clientRepository.userAltaSesion($scope.usuario.user, $scope.usuario.password)
            .then(
                function successCallback(res_session) {
                    $rootScope.Usuario = res_session.data.data;
                    //$scope.CreateNewSession($rootScope.Usuario._id, $rootScope.Usuario.name, $rootScope.token_app, $rootScope.Usuario.vigencia);
                    $rootScope.nombreUsuario = $rootScope.Usuario.nombreApp;

                    //Si se loguea traigo los datos de los pedidos a entregar con el usuario como parametro
                    clientRepository.obtenerDatos($rootScope.Usuario.per_idpersonaApp)
                        .then(
                            function successCallback(response) {
                                $ionicLoading.hide();
                                $rootScope.datosPedidos = response.data;
                                $state.go('consultas', {
                                    token: 'ok'
                                });
                                $ionicLoading.hide();
                            },
                            function errorCallback(response) {
                                $ionicLoading.hide();
                                alertFactory.message('Error', 'No hay pedidos : ' + response.data);
                            }
                        );
                },
                function errorCallback(res_session) {
                    alertFactory.message('Error', 'Error al obtener los datos del usuario: ');
                }
            );



    };


    $scope.logout = function() {
            $cookies.remove('token');
            currentUser = {};
        },

        $scope.CreateNewSession = function(name, rcs, token, vigencia) {
            sessionDBO.add(name, rcs, token, vigencia)
                .then(function successCallback(response) {
                    //OnSuccess
                    //alertFactory.message('Éxito', 'se insertó la sesión');
                }, function errorCallback(response) {
                    //OnError
                    //alertFactory.message('Error', 'Error al guardar sesion');
                });
        };


    $scope.SubirPedidosaEntregar = function(name, rcs, token, vigencia) {
        sessionDBO.addPedidos(name, rcs, token, vigencia)
            .then(function successCallback(response) {
                //OnSuccess
                //alertFactory.message('Éxito', 'se insertó la sesión');
            }, function errorCallback(response) {
                //OnError
                //alertFactory.message('Error', 'Error al guardar sesion');
            });
    };




    $scope.GetPedidoDetalle = function(idpedido) {

        clientRepository.pedidoDetalle(idpedido)
            .then(
                function successCallback(response) {

                    if (response.data != 'null') {
                        //Insertar la sesión


                    } else {
                        alertFactory.message('Advertencia', 'Sin detalle');
                    }
                },
                function errorCallback(response) {

                    alertFactory.message('Error', 'Error al traer el detalle del pedido: ' + response.data);
                }
            );
    };

});
