appServices.factory('User', function($resource, configurationFactory) {

   var loginRepositoryGlobal = configurationFactory.globalAPI;

    return $resource(loginRepositoryGlobal + '/api/users/:id/:controller', {
      id: '@_id'
    }, {
      changePassword: {
        method: 'PUT',
        params: {
          controller: 'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id: 'me'
        }
      }
    });
  });