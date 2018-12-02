// Initializes the `tradeOpeningHours` service on path `/trade-opening-hours`
const createService = require('feathers-knex');
const createModel = require('../../models/trade-opening-hours.model');
const hooks = require('./trade-opening-hours.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'trade_opening_hours',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/trade-opening-hours', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('trade-opening-hours');

  service.hooks(hooks);
};
  