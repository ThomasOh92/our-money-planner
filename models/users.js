
module.exports = (dbPoolInstance) => {


  let createUsers = async (accountid, partnera, partnerb) => {
    valuesPartnerA = [accountid, partnera, "~ / month"];
    let queryStringPartnerA = "INSERT INTO users (account_id, username, income) VALUES ($1, $2, $3) RETURNING *";
    valuesPartnerB = [accountid, partnerb, "~ / month"];
    let queryStringPartnerB = "INSERT INTO users (account_id, username, income) VALUES ($1, $2, $3) RETURNING *";
    let answerA;
    let answerB;
    try {
        answerA = await dbPoolInstance.query(queryStringPartnerA, valuesPartnerA)
        answerB = await dbPoolInstance.query(queryStringPartnerB, valuesPartnerB)
    } catch (err){
        console.log(err, "query err")
    }
    return {partnerA: answerA.rows[0].username, partnerB: answerB.rows[0].username}
  };

  return {
    createUsers
  };
};