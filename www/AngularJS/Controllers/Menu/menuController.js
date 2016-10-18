appControllers.controller('menuController', function ($scope, $rootScope, $state, alertFactory, sessionFactory) {

    // comment
    $scope.Inicio = function () {
        $state.go('tabsController.reservaciones', {
            idacta: sessionFactory.cliente.idActa
        });
    };


});
