// Initializes the `orderStateHistories` service on path `/order-state-histories`
const createService = require('feathers-knex');
const createModel = require('../../models/order-state-histories.model');
const hooks = require('./order-state-histories.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'order_state_histories',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/order-state-histories', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('order-state-histories');

  service.hooks(hooks);
};
  