module.exports = (dbPoolInstance) => {
  let getStickyNotes = async(accountid) => {
    let values = [accountid]
    let queryString = "SELECT username, content, xcoord, ycoord FROM stickynotes WHERE account_id = $1"
    let answer
    try {
        answer = await dbPoolInstance.query(queryString, values);
    } catch (err) {
        console.log(err)
    }
    return answer.rows
  }

  let insertStickyNotes = async (username, content, xcoord, ycoord, account_id) => {
    let values = [username, content, xcoord, ycoord, account_id];
    let queryString = "INSERT INTO stickynotes (username, content, xcoord, ycoord, account_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    let answer;
    try {
        answer = await dbPoolInstance.query(queryString, values);
    } catch (err) {
        console.log("query err", err)
    }
    return answer.rows[0];
  }

  let deleteStickyNotes = async (accountid) => {
    values = [accountid]
    console.log(values)
    let queryString = "DELETE FROM stickynotes WHERE account_id = $1 RETURNING *"
    let answer
    try{
        answer = await dbPoolInstance.query(queryString, values);
    }catch (err){
        console.log(err)
    }
    return answer.rows[0]
  }


  return {
    getStickyNotes,
    insertStickyNotes,
    deleteStickyNotes
  };
};