// Initializes the `orderStates` service on path `/order-states`
const createService = require('feathers-knex');
const createModel = require('../../models/order-states.model');
const hooks = require('./order-states.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'order_states',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/order-states', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('order-states');

  service.hooks(hooks);
};
  