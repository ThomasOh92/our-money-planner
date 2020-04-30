/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */



const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{
  configs = {
    user: 'thomasoh',
    host: '127.0.0.1',
    database: 'couplefinc',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});


/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

const allAccountsModelsFunction = require('./models/accounts');
const accountsModelsObject = allAccountsModelsFunction( pool );

const usersModelsFunction = require('./models/users');
const usersModelsObject = usersModelsFunction( pool );

const netWorthModelsFunction = require('./models/networth');
const netWorthModelsObject = netWorthModelsFunction( pool );

const bankAccountsModelsFunction = require('./models/bankaccount');
const bankAccountsModelsObject = bankAccountsModelsFunction ( pool );

const investmentsModelsFunction = require('./models/investments');
const investmentsModelsObject = investmentsModelsFunction ( pool );

const outgoingsModelsFunction = require('./models/outgoings');
const outgoingsModelsObject = outgoingsModelsFunction ( pool );
/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */


module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool:pool,
  //app models
  accounts: accountsModelsObject,
  users: usersModelsObject,
  networth: netWorthModelsObject,
  bankaccount: bankAccountsModelsObject,
  investments: investmentsModelsObject,
  outgoings: outgoingsModelsObject
};