module.exports = (dbPoolInstance) => {
  let getInvestments = async(accountid) => {
    let values = [accountid]
    let queryString = "SELECT id, name, value, description FROM investments WHERE account_id = $1"
    let answer
    try {
        answer = await dbPoolInstance.query(queryString, values);
    } catch (err) {
        console.log(err)
    }
    return answer.rows
  }

  let addInvestment = async (name, value, description, account_id) => {
    let values = [name, value, description, account_id];
    let queryString = "INSERT INTO investments (name, value, description, account_id) VALUES ($1, $2, $3, $4) RETURNING *";
    let answer;
    try {
        answer = await dbPoolInstance.query(queryString, values);
    } catch (err) {
        console.log("query err", err)
    }
    return answer.rows[0];
  }

  let deleteInvestment = async (investmentid) => {
    values = [investmentid]
    console.log(values)
    let queryString = "DELETE FROM investments WHERE id = $1 RETURNING *"
    let answer
    try{
        answer = await dbPoolInstance.query(queryString, values);
    }catch (err){
        console.log(err)
    }
    return answer.rows[0]
  }


  return {
    getInvestments,
    addInvestment,
    deleteInvestment
  };
};