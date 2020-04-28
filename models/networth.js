/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {


  let getNetWorthFromDatabase = async (userid) => {
    try {
        let values = [userid]
        let queryString = "SELECT networth FROM users WHERE id = $1";
        const queryResult = await dbPoolInstance.query(queryString, values)
        return {amount: queryResult.rows[0]}
    } catch (err){
        console.log("query err", err)
    }
  }

  let updateNetWorthInDatabase = async (userid, newNetWorth) => {
    try {
        let values = [userid, newNetWorth];
        let queryString = "UPDATE users SET networth = $2 WHERE id = $1 RETURNING *"
        const queryResult = await dbPoolInstance.query(queryString, values)
        return queryResult.rows[0].networth
    } catch (err){
        console.log("query err", err)
    }
  }

  return {
    getNetWorthFromDatabase,
    updateNetWorthInDatabase
  };
};