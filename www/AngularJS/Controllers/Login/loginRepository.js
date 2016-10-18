appServices.factory('loginRepository', function ($http, configurationFactory) {

    //var loginRepositoryGlobal = configurationFactory.globalAPI;

    //Direccion del portal: http://192.168.20.9:4600/auth/local/?rfc=PAGO910812ZZZ&password=test
    //var loginRepositoryGlobal = 'http://192.168.20.9:4600';


    return {

        iniciarSesion: function (user, clave) {
            var loginURL = loginRepositoryGlobal + '/auth/local/';

            // return $http({
            //     url: loginURL,
            //     method: "post",
            //     params: {
            //         user: user,
            //         pass: clave
            //     },
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });

             return $http.post(loginURL, {
                rfc: user,
                password: clave
            });
       

        },
        validarSesion: function (token) {
            var loginURL = loginRepositoryGlobal + 'validarsesion/';
            return $http({
                url: loginURL,
                method: "get",
                params: {
                    token: token,
                    dispositivo: 2
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        
    };
});
