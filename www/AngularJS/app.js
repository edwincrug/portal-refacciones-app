// Ionic Starter App

//Base de datos
var db = null;
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ngResource', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'ngCordova','ngCookies','ui.router'])

//Configuracion de la camara?

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})


.run(function ($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

        if (window.cordova) {
            // App syntax
            db = $cordovaSQLite.openDB({
                name: "refaccionesapp.db",
                iosDatabaseLocation: 'default'
            });

        } else {
            // Ionic serve syntax
            db = window.openDatabase("refaccionesapp.db", "1.0", "App Entrega de refacciones", -1);
        }

        //Wait for open DB
        setTimeout(function () {

            //FAL tabla donde se guardara el usuario y sesion
             $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS User_app(_id_app integer primary key, name_app text, rfc_app text, token_session_app text, vigencia_app text)")
                .then(function (res) {
                    console.log('tabla User creada.');
                }, function (err) {
                    console.log(err);
                });

            //FAL tabla con los pedidos y datos generales    
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS Pedido_app(idPedido_app integer primary key, idCotizacion_app integer, folio_app text, nombreCliente_app text, calle_app text, numero_app text, colonia_app text, codigoPostal_app text, delegacion_app text, descripcion_app text, rfcCliente_app text, token_app text, total_app numeric, email_app text, imagenFirma_app text)")
                .then(function (res) {
                    console.log('tabla Pedido creada.');
                }, function (err) {
                    console.log(err);
                });

            //FAL tabla con el detalle de los pedidos a capturar    
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS PedidoDetalle_app(idPedidoDetalle_app integer primary key,idPedido_app integer, PTS_DESPARTE text, PTS_DESPARTE1 text, PTS_IDPARTE text, PTS_PCOLISTA numeric, cantidad numeric)")
                .then(function (res) {
                    console.log('tabla Detalle creada.');
                }, function (err) {
                    console.log(err);
                });
        }, 500);

    });
})


