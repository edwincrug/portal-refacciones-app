appServices.factory('sessionDBO', function ($cordovaSQLite, dbFactory) {

    var self = this;

    self.all = function () {
        return dbFactory.query("SELECT token, cliente FROM session")
            .then(function (result) {
                return dbFactory.getAll(result);
            });
    };

    self.get = function (id) {
        var parameters = [id];
        return dbFactory.query("SELECT token, cliente FROM session WHERE id = (?)", parameters)
            .then(function (result) {
                return dbFactory.getById(result);
            });
    };

    self.add = function (name, rcs, token, vigencia) {
        var parameters = [name, rcs, token, vigencia];
        return dbFactory.query("INSERT INTO User_app (name_app, rfc_app, token_session_app, vigencia_app) VALUES (?,?,?,?)", parameters);
    };

     self.addPedidos = function (pedidosObj) {
        
         var parameters = Object.keys(pedidosObj).map(function (k) {
            return pedidosObj[k]
        });

        //Inserto el objeto
        return dbFactory.query("INSERT INTO client(clase,idCliente,idActa,idContrato,idTipo,tipo ,idSucursal,sucursal,idEstatusContrato,estatusContrato,razonSocial,nombreComercial ,mailPrincipal,paginaWeb ,fechaInicio,idTipoFiscal ,tipoFiscal,nombre,idLE,LE ,rfc,lada ,telefono,cie ,idEjecutivo,ejecutivo,idOficina,oficina ,giroComercial,fecha,nota,creditos,usuario,password,cliente)VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", parameters);

    };

    self.remove = function (sessionobj) {
        var parameters = [sessionobj.token];
        return dbFactory.query("DELETE FROM session WHERE token = (?)", parameters);
    };

    self.removeAll = function () {
        return dbFactory.query("DELETE FROM session");
    };

    self.update = function (origMember, editMember) {
        var parameters = [editMember.token, editMember.cliente, origMember.id];
        return dbFactory.query("UPDATE team SET token = (?), cliente = (?) WHERE id = (?)", parameters);
    };

    return self;

});
