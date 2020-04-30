module.exports = (dbPoolInstance) => {
  let getOutgoings = async(accountid) => {
    let values = [accountid]
    let queryString = "SELECT id, name, payment, description FROM outgoings WHERE account_id = $1"
    let answer
    try {
        answer = await dbPoolInstance.query(queryString, values);
    } catch (err) {
        console.log(err)
    }
    return answer.rows
  }

  let addOutgoing = async (name, payment, description, account_id) => {
    let values = [name, payment, description, account_id];
    let queryString = "INSERT INTO outgoings (name, payment, description, account_id) VALUES ($1, $2, $3, $4) RETURNING *";
    let answer;
    try {
        answer = await dbPoolInstance.query(queryString, values);
    } catch (err) {
        console.log("query err", err)
    }
    return answer.rows[0];
  }

  let deleteOutgoing = async (outgoingid) => {
    values = [outgoingid]
    console.log(values)
    let queryString = "DELETE FROM outgoings WHERE id = $1 RETURNING *"
    let answer
    try{
        answer = await dbPoolInstance.query(queryString, values);
    }catch (err){
        console.log(err)
    }
    return answer.rows[0]
  }


  return {
    getOutgoings,
    addOutgoing,
    deleteOutgoing
  };
};