// Initializes the `countryCodes` service on path `/country-codes`
const createService = require('feathers-knex');
const createModel = require('../../models/country-codes.model');
const hooks = require('./country-codes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'country_codes',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/country-codes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('country-codes');

  service.hooks(hooks);
};
  