const jwt = require('@feathersjs/authentication-jwt');

class JWTVerifier extends jwt.Verifier {
  async verify(req, payload, done) {
    // const knex = require('./knex');

    // const user = knex.column('username', 'email', 'realName').select().from('users').where('id', payload.userId);

    // console.log('jwtuser',user);

    // payload.user = user;

    done(null, null, payload);
  }
}

module.exports = JWTVerifier;

    // 

   