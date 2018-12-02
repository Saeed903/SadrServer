// Initializes the `orderChats` service on path `/order-chats`
const createService = require('feathers-knex');
const createModel = require('../../models/order-chats.model');
const hooks = require('./order-chats.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'order_chats',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/order-chats', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('order-chats');

  service.hooks(hooks);
};
  