
const users = require('./users/users.service.js');
const currencies = require('./currencies/currencies.service.js');
const places = require('./places/places.service.js');
const paymentMethods = require('./payment-methods/payment-methods.service.js');
const countries = require('./countries/countries.service.js');
const orders = require('./orders/orders.service.js');
const advertises = require('./advertises/advertises.service.js');
const tradeTypes = require('./tradeTypes/tradeTypes.service.js');
const cryptoCurrencies = require('./cryptoCurrencies/cryptoCurrencies.service.js');
const feedbackUsers = require('./feedback-users/feedback-users.service.js');
const orderChats = require('./order-chats/order-chats.service.js');
const orderStateHistories = require('./order-state-histories/order-state-histories.service.js');
const orderStates = require('./order-states/order-states.service.js');
const wallets = require('./wallets/wallets.service.js');
const loginHistories = require('./login-histories/login-histories.service.js');
const permissions = require('./permissions/permissions.service.js');
const usersPermissions = require('./users_permissions/users_permissions.service.js');
const fraudulentUsers = require('./fraudulent-users/fraudulent-users.service.js');
const dayOfWeeks = require('./day-of-weeks/day-of-weeks.service.js');
const tradeOpeningHours = require('./trade-opening-hours/trade-opening-hours.service.js');
const publishAdvertises = require('./publishAdvertises/publishAdvertises.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(currencies);
  app.configure(places);
  app.configure(paymentMethods);
  app.configure(countries);
  app.configure(orders);
  app.configure(advertises);
  app.configure(tradeTypes);
  app.configure(cryptoCurrencies);
  app.configure(feedbackUsers);
  app.configure(orderChats);
  app.configure(orderStateHistories);
  app.configure(orderStates);
  app.configure(wallets);
  app.configure(loginHistories);
  app.configure(permissions);
  app.configure(usersPermissions);
  app.configure(fraudulentUsers);
  app.configure(dayOfWeeks);
  app.configure(tradeOpeningHours);
  app.configure(publishAdvertises);
};
