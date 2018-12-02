// Initializes the `dayOfWeeks` service on path `/day-of-weeks`
const createService = require('feathers-knex');
const createModel = require('../../models/day-of-weeks.model');
const hooks = require('./day-of-weeks.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'day_of_weeks',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/day-of-weeks', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('day-of-weeks');

  service.hooks(hooks);
};
  