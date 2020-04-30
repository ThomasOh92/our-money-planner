module.exports = (db) => {

  let getInvestments = async (req, res) => {
    try{
        const modelRequest = await db.investments.getInvestments(req.cookies.account_id)
        res.send(modelRequest)
    }catch(err){
        console.log(err)
    }
  }

  //via form in modal, no AJAX request
  let addInvestment = async (req, res) => {
    try {
        let result = await db.investments.addInvestment(req.body.name, req.body.value, req.body.description ,req.cookies.account_id)
        console.log("query result", result)
        res.redirect('/')
    }catch (err){
        console.log(err)
    }
  }

  let deleteInvestment = async (req, res) => {
    try{
        let result = await db.investments.deleteInvestment(req.body.investmentid)
        console.log("query result", result)
        res.send(result)
    }catch (err){
        console.log(err)
    }
  }

  return {
    getInvestments,
    addInvestment,
    deleteInvestment
  };

}