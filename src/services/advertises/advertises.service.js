// Initializes the `Advertises` service on path `/advertises`
const createService = require('feathers-knex');
const createModel = require('../../models/advertises.model');
const hooks = require('./advertises.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'advertises',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/advertises', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('advertises');

  service.hooks(hooks);
};
  