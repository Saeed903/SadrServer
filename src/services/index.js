
const users = require('./users/users.service.js');
const currencies = require('./currencies/currencies.service.js');
const countryCodes = require('./country-codes/country-codes.service.js');
const places = require('./places/places.service.js');
const paymentMethods = require('./payment-methods/payment-methods.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(currencies);
  app.configure(countryCodes);
  app.configure(places);
  app.configure(paymentMethods);
};
