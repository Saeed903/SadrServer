// Initializes the `places` service on path `/places`
const createService = require('feathers-knex');
const createModel = require('../../models/places.model');
const hooks = require('./places.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'places',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/places', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('places');

  service.hooks(hooks);
};
  