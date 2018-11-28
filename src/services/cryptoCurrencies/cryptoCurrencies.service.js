// Initializes the `cryptoCurrencies` service on path `/cryptoCurrencies`
const createService = require('feathers-knex');
const createModel = require('../../models/cryptoCurrencies.model');
const hooks = require('./cryptoCurrencies.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'cryptoCurrencies',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/cryptoCurrencies', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('cryptoCurrencies');

  service.hooks(hooks);
};
  