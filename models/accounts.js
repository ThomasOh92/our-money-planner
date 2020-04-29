/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const sha256 = require('js-sha256');
const SALT = "everyday i'm hustlin";

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let registerAccount = async (accountname, pw) => {
    let hashedpw = sha256(pw);
    values = [accountname, hashedpw];
    let queryString = "INSERT INTO accounts (accountname, password) VALUES ($1, $2) RETURNING *";
    let answer;
    try {
        answer = await dbPoolInstance.query(queryString, values)
    } catch (err){
        console.log(err, "query err")
    }
    let currentSessionCookie = sha256(answer.rows[0].id + "logged" + SALT)
    return {currentSessionCookie, queryResult: answer.rows[0]}
  };

  let verifyLogin = async (accountname, pw) => {
    //Verifying password
    let hashedpw = sha256(pw)
    let values = [accountname]
    let queryString = "SELECT * FROM accounts WHERE accountname = $1";
    const queryResult = await dbPoolInstance.query(queryString, values)
    let loginSuccess;
    if (queryResult.rows[0].password === hashedpw){
        loginSuccess = true;
    } else {
        loginSuccess = false;
    }
    let currentSessionCookie = sha256(queryResult.rows[0].id + "logged" + SALT)

    //Getting usernames
    let usernameQueryValues = [queryResult.rows[0].id]
    let usernameQueryString = "SELECT username FROM users WHERE account_id = $1"
    const usernameQueryResult = await dbPoolInstance.query(usernameQueryString, usernameQueryValues)

    return {loginSuccess,
            queryResult: queryResult.rows[0],
            currentSessionCookie,
            partnerA: usernameQueryResult.rows[0].username,
            partnerB: usernameQueryResult.rows[1].username}
  };

  return {
    registerAccount,
    verifyLogin
  };
};