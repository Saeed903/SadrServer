// Initializes the `publish-advertises` service on path `/publish-advertises`
const createService = require('./publishAdvertises.class.js');
const hooks = require('./publishAdvertises.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/publishAdvertises', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('publishAdvertises');

  service.hooks(hooks);
};
