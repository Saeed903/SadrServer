/* eslint-disable no-console */

// Trades-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'Orders';
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('orderId');
        table.integer('advertiseId').notNullable();
        table.decimal('amount', 18, 4).notNullable();
        table.integer('buyerUserId').notNullable();
        table.dateTime('createDate').notNullable();
        table.string('orderTitle');
        table.integer('orderStateId').notNullable();

        table.foreign('buyerUserId').references('Id').inTable('users');
        table.foreign('advertiseId').references('advertiseId').inTable('Advertises');
        table.foreign('orderStateId').references('orderStateId').inTable('OrderStates');
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });
  

  return db;
};
