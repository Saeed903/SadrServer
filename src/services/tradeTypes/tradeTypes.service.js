// Initializes the `TradeTypes` service on path `/trade-types`
const createService = require('feathers-knex');
const createModel = require('../../models/tradeTypes.model');
const hooks = require('./tradeTypes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'tradeTypes',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tradeTypes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tradeTypes');

  service.hooks(hooks);
};
  