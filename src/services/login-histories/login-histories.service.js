// Initializes the `loginHistories` service on path `/login-histories`
const createService = require('feathers-knex');
const createModel = require('../../models/login-histories.model');
const hooks = require('./login-histories.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'login_histories',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/login-histories', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('login-histories');

  service.hooks(hooks);
};
  