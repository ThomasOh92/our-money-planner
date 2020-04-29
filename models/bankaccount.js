
module.exports = (dbPoolInstance) => {
  let getBankAccs = async(accountid) => {
    let values = [accountid]
    let queryString = "SELECT accountdescription, amount, bank, id FROM bankaccounts WHERE account_id = $1"
    let answer
    try {
        answer = await dbPoolInstance.query(queryString, values);
    } catch (err) {
        console.log(err)
    }
    return answer.rows
  }

  let addBankAcc = async (accountdescript, balance, accountid, bank) => {
    balance = parseFloat(balance);
    let values = [accountdescript, balance, accountid, bank];
    let queryString = "INSERT INTO bankaccounts (accountdescription, amount, account_id, bank) VALUES ($1, $2, $3, $4)";
    let answer;
    try {
        answer = await dbPoolInstance.query(queryString, values);
    } catch (err) {
        console.log("query err", err)
    }
    return answer.rows[0];
  }

  let deleteBankAcc = async (bankaccid) => {
    values = [bankaccid]
    console.log(values)
    let queryString = "DELETE FROM bankaccounts WHERE id = $1 RETURNING *"
    let answer
    try{
        answer = await dbPoolInstance.query(queryString, values);
    }catch (err){
        console.log(err)
    }
    return answer.rows[0]
  }


  return {
    getBankAccs,
    addBankAcc,
    deleteBankAcc
  };
};