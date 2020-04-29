/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {


  let getNetWorthFromDatabase = async (accountid) => {
    try {
        let values = [accountid]
        let queryString = "SELECT networth FROM accounts WHERE id = $1";
        const queryResult = await dbPoolInstance.query(queryString, values)
        return {amount: queryResult.rows[0]}
    } catch (err){
        console.log("query err", err)
    }
  }

  let updateNetWorthInDatabase = async (accountid, newNetWorth) => {
    try {
        let values = [accountid, newNetWorth];
        let queryString = "UPDATE accounts SET networth = $2 WHERE id = $1 RETURNING *"
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