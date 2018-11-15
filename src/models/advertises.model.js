/* eslint-disable no-console */

// Advertises-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'advertises';
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('Id');
        table.integer('tradeTypeId');
        table.integer('countryId');
        table.string('currencyCode', 20).notNullable();
        table.float('margin'); 
        table.string('priceEquation');
        table.decimal('minTransactionLimit', 18, 4);
        table.decimal('maxTransactionLimit', 18, 4);
        table.string('termsOfTrade');
        table.boolean('trackLiquidity');
        table.boolean('identifiedPeopleOnly');
        table.boolean('smsVerification');
        table.boolean('trustedPeopleOnly');
        table.integer('ownerId').notNullable();

        table.foreign('ownerId').references('Id').inTable('Users');
        table.foreign('tradeTypeId').references('Id').inTable('TradeTypes');
        table.foreign('countryId').references('Id').inTable('Countries');
        table.foreign('currencyCode').references('currencyCode').inTable('Currencies');

      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });
  

  return db;
};
