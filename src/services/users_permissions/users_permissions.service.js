// Initializes the `users_permissions` service on path `/users-permissions`
const createService = require('feathers-knex');
const createModel = require('../../models/users_permissions.model');
const hooks = require('./users_permissions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'users_permissions',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/users-permissions', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users-permissions');

  service.hooks(hooks);
};
  