/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const sha256 = require('js-sha256');
const SALT = "everyday i'm hustlin";

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let registerUser = async (username, pw) => {
    let hashedpw = sha256(pw);
    values = [username, hashedpw];
    let queryString = "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *";
    let answer;
    try {
        answer = await dbPoolInstance.query(queryString, values)
    } catch (err){
        console.log(err, "query err")
    }
    let currentSessionCookie = sha256(answer.rows[0].id + "logged" + SALT)
    return {currentSessionCookie, queryResult: answer.rows[0]}
  };

  let verifyLogin = async (username, pw) => {
    let hashedpw = sha256(pw)
    let values = [username]
    let queryString = "SELECT * FROM users WHERE username = $1";
    const queryResult = await dbPoolInstance.query(queryString, values)
    let loginSuccess;
    if (queryResult.rows[0].password === hashedpw){
        loginSuccess = true;
    } else {
        loginSuccess = false;
    }
    let currentSessionCookie = sha256(queryResult.rows[0].id + "logged" + SALT)
    return {loginSuccess, queryResult: queryResult.rows[0], currentSessionCookie}

  }

  return {
    registerUser,
    verifyLogin
  };
};