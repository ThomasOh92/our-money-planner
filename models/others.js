module.exports = (dbPoolInstance) => {
  let getOthers = async(accountid) => {
    let values = [accountid]
    let queryString = "SELECT id, title, comments FROM others WHERE account_id = $1"
    let answer
    try {
        answer = await dbPoolInstance.query(queryString, values);
    } catch (err) {
        console.log(err)
    }
    return answer.rows
  }

  let addOther = async (title, comments, account_id) => {
    let values = [title, comments, account_id];
    let queryString = "INSERT INTO others (title, comments, account_id) VALUES ($1, $2, $3) RETURNING *";
    let answer;
    try {
        answer = await dbPoolInstance.query(queryString, values);
    } catch (err) {
        console.log("query err", err)
    }
    return answer.rows[0];
  }

  let deleteOther = async (otherid) => {
    values = [otherid]
    console.log(values)
    let queryString = "DELETE FROM others WHERE id = $1 RETURNING *"
    let answer
    try{
        answer = await dbPoolInstance.query(queryString, values);
    }catch (err){
        console.log(err)
    }
    return answer.rows[0]
  }


  return {
    getOthers,
    addOther,
    deleteOther
  };
};