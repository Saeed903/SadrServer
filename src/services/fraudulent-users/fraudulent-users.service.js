// Initializes the `fraudulentUsers` service on path `/fraudulent-users`
const createService = require('feathers-knex');
const createModel = require('../../models/fraudulent-users.model');
const hooks = require('./fraudulent-users.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'fraudulent_users',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/fraudulent-users', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('fraudulent-users');

  service.hooks(hooks);
};
  