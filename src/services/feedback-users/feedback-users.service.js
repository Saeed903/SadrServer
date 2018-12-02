// Initializes the `feedbackUsers` service on path `/feedback-users`
const createService = require('feathers-knex');
const createModel = require('../../models/feedback-users.model');
const hooks = require('./feedback-users.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'feedback_users',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/feedback-users', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('feedback-users');

  service.hooks(hooks);
};
  