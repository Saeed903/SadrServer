
const users = require('./users/users.service.js');
const currencies = require('./currencies/currencies.service.js');
const places = require('./places/places.service.js');
const paymentMethods = require('./payment-methods/payment-methods.service.js');
const countries = require('./countries/countries.service.js');
const orders = require('./orders/orders.service.js');
const advertises = require('./advertises/advertises.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(currencies);
  app.configure(places);
  app.configure(paymentMethods);
  app.configure(countries);
  app.configure(orders);
  app.configure(advertises);
};
