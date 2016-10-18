appServices.factory('clientRepository', function ($http, configurationFactory) {

    //var loginRepositoryGlobal = configurationFactory.globalAPI + 'client/';
    var loginRepositoryGlobal = 'http://192.168.20.41:3781';
    //var loginRepositoryGlobal = 'http://localhost:3781';
    return {

        userAltaSesion: function (user,pass) {
            var loginURL = loginRepositoryGlobal + '/api/user/login/';
            return $http({
                url: loginURL,
                method: "POST",
                params: {
                    user: user,
                    pass:pass
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
          
        },


        obtenerDatos: function (User) {
            var loginURL = loginRepositoryGlobal + '/api/user/entregas/';
             return $http({
                url: loginURL,
                method: "POST",
                params: {
                    idchofer: User
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },

        

    };
});
