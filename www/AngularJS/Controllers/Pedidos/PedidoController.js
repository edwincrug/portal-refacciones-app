appControllers.controller('PedidoController', ['$scope', '$rootScope', 'listOcupacion', '$ionicLoading', '$ionicPopup', '$state', 'PedidoRepository', 'sessionFactory', 'alertFactory', 'Camera', function($scope, $rootScope, listOcupacion, $ionicLoading, $ionicPopup, $state, PedidoRepository, sessionFactory, alertFactory, Camera) {

    $scope.model = this;

    $scope.model.entrega = listOcupacion;

    PedidoRepository.entregaDireccion($scope.model.entrega)
        .then(
            function successCallback(response) {
                $ionicLoading.hide();
                $rootScope.pedidoDireccion = response.data.data;
                $rootScope.dircompleta = $rootScope.pedidoDireccion[0].RTD_CALLE1 + ' ' + $rootScope.pedidoDireccion[0].RTD_NUMEXTER + ' ' + $rootScope.pedidoDireccion[0].RTD_COLONIA + ' ' + $rootScope.pedidoDireccion[0].RTD_DELEGAC
            },
            function errorCallback(response) {
                $ionicLoading.hide();
                alertFactory.message('Error', 'No hay direccion asociada al pedido : ');
                //alertFactory.message('Error', 'No hay direccion asociada al pedido : ' + response.data);
            }
        );

    PedidoRepository.entregaDetalle($scope.model.entrega)
        .then(
            function successCallback(response) {
                $ionicLoading.hide();
                $rootScope.datospedidoDetalle = response.data.data;

            },
            function errorCallback(response) {
                $ionicLoading.hide();
                alertFactory.message('Error', 'No hay detalle : ');
                //alertFactory.message('Error', 'No hay detalle : ' + response.data);
            }
        );

    $scope.getPhoto = function() {
        Camera.getPicture().then(function(imageURI) {
            console.log(imageURI);
            $scope.lastPhoto = imageURI;
        }, function(err) {
            console.err(err);
        }, {
            quality: 75,
            targetWidth: 320,
            targetHeight: 320,
            correctOrientation: true,
            saveToPhotoAlbum: false
        });
    };


    $scope.nuevaDevolucion = function(Devolucion) {
        var bolDevolucion = true;
        var numCantidaddevolucion = 0;

        PedidoRepository.setDevolucionCabecera(Devolucion).then(function(data) {});
        setTimeout(function() {

            Devolucion.forEach(function(devolucion, k) {

             if(devolucion.PMD_CANTIDAD == null)
             {
              devolucion.PMD_CANTIDAD = 0;
             }
               if(devolucion.CANTIDAD_OLD == devolucion.PMD_CANTIDAD){
                  bolDevolucion = false;
                }
                if (bolDevolucion){

                  numCantidaddevolucion = devolucion.CANTIDAD_OLD - devolucion.PMD_CANTIDAD;

                  PedidoRepository.setDevolucionDetalle(devolucion.PMD_NUMERO, devolucion.PMD_CODIGO, numCantidaddevolucion).then(function(data) {});
                }
            });
        }, 3000);
    }
    
}]);
