appServices.factory('PedidoRepository', function ($http, configurationFactory) {

    //var loginRepositoryGlobal = configurationFactory.globalAPI + 'client/';
    var loginRepositoryGlobal = 'http://192.168.20.41:3781';

    //var loginRepositoryGlobal = 'http://localhost:3781';

    return {

       entregaDireccion: function (idPedido) {
            var loginURL = loginRepositoryGlobal + '/api/user/direccion/';
            return $http({
                url: loginURL,
                method: "POST",
                params: {
                    numpedido: idPedido
                   
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
          
        },

        entregaDetalle: function (idPedido) {
            var loginURL = loginRepositoryGlobal + '/api/user/detalle/';
            return $http({
                url: loginURL,
                method: "POST",
                params: {
                    idpedido: idPedido                   
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
          
        },

        setDevolucionCabecera: function (devolucion) {
            var loginURL = loginRepositoryGlobal + '/api/user/devolucionCabecera/';
            return $http({
                url: loginURL,
                method: "POST",
                data: JSON.stringify(devolucion),
                // params: {
                //     idpedido: idpedido                   
                // },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
          
        },

        setDevolucionDetalle: function (pedido,codigo,cantidad) {
            var loginURL = loginRepositoryGlobal + '/api/user/devolucionDetalle/';
            return $http({
                url: loginURL,
                method: "POST",                
                params: {
                    idpedido: pedido,
                    codigo:codigo,
                    cantidad:cantidad
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
          
        },

    };
});
