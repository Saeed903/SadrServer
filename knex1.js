const options = {
    client: 'mssql',
    connection: {
        host: '94.183.66.58',
        user: 'cryptouser',
        password: 'zaq1@3edc',
        database: 'SadrCrypto',
        options: {
            encrypt: false,
            port:1433
        }
    }
}

const knex = require('knex')(options);
var user = {};

knex.from('users').select("*").where({ id: 5})
    .then((rows) => {
      for (row of rows) {
          user = row
          delete user.password;
          console.log('user',user);
          //console.log(`${row['id']} ${row['name']} ${row['price']}`);
      }
  }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });