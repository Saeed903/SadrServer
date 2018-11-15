/* eslint-disable no-console */

// users-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'users'
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('Id');
        table.string('email').unique();
        table.string('password');
        table.string('tel');
        table.string('mobile');
        table.date('verifiedDate');
        table.bool('isVerified');
        table.date('notVerifiedDate');
        table.string('introduction');
        table.date('emailVerifiedDate');
        table.date('phoneVerifiedDate');
        table.date('identityVerifiedDate');
        table.image('identityCardImage');
        table.image('driversLicense');
        table.string('realName');
      
      
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
};
