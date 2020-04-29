
module.exports = (dbPoolInstance) => {

  let createUsers = async (accountid, partnera, partnerb) => {
    let valuesPartnerA = [accountid, partnera, "~ / month"];
    let valuesPartnerB = [accountid, partnerb, "~ / month"];
    let queryString = "INSERT INTO users (account_id, username, income) VALUES ($1, $2, $3) RETURNING *";
    let answerA;
    let answerB;
    try {
        answerA = await dbPoolInstance.query(queryString, valuesPartnerA)
        answerB = await dbPoolInstance.query(queryString, valuesPartnerB)
    } catch (err){
        console.log(err, "query err")
    }
    return {partnerA: answerA.rows[0].username, partnerB: answerB.rows[0].username}
  };

  let getIncome = async (accountid, partnera, partnerb) => {
    let valuesPartnerA = [accountid, partnera];
    let valuesPartnerB = [accountid, partnerb];
    let queryString = "SELECT income FROM users WHERE account_id = $1 AND username = $2";
    let answerA;
    let answerB;
    try {
        answerA = await dbPoolInstance.query(queryString, valuesPartnerA);
        answerB = await dbPoolInstance.query(queryString, valuesPartnerB);
    } catch (err) {
        console.log("query err", err)
    }
    return {partnerAIncome: answerA.rows[0].income, partnerBIncome: answerB.rows[0].income}
  }

  let updateIncome = async (accountid, partnername, newincome) => {
    let values = [accountid, partnername, newincome];
    let queryString = "UPDATE users SET income = $3 WHERE account_id = $1 AND username = $2 RETURNING *";
    let answer;
    try {
        answer = await dbPoolInstance.query(queryString, values);
    } catch (err) {
        console.log("query err", err)
    }
    return answer;
  }

  return {
    createUsers,
    getIncome,
    updateIncome
  };
};