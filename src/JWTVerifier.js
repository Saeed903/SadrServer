const jwt = require('@feathersjs/authentication-jwt');

class JWTVerifier extends jwt.Verifier {
  async verify(req, payload, done) {
    
    const opt = require('./../config/default.json');
    
    const knex = require('knex')(opt.mssql);
    var user = {},
        row;
    knex.from('users').select("*").where({ id: payload.userId})
        .then( (rows) => {
          for (row of rows) {
              user = row
              delete user.password;
              
              payload.user = user;

              done(null, user, payload);
              //console.log(`${row['id']} ${row['name']} ${row['price']}`);
          }
      }).catch((err) => { console.log( err); throw err })
        .finally(() => {
            knex.destroy();
        });

  }
}

module.exports = JWTVerifier;


   