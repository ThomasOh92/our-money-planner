module.exports = (db) => {

  let getBankAccs = async (req, res) => {
    try{
        const modelRequest = await db.bankaccount.getBankAccs(req.cookies.account_id)
        res.send(modelRequest)
    }catch(err){
        console.log(err)
    }
  }

  let addBankAcc = async (req, res) => {
    try {
        if (parseFloat(req.body.balance)){
            let result = await db.bankaccount.addBankAcc(req.body.accountdescription, req.body.balance, req.cookies.account_id, req.body.bank)
            console.log("query result", result)
            res.redirect('/')
        } else {
            res.redirect('/')
        }
    }catch (err){
        console.log(err)
    }
  }

  let deleteBankAcc = async (req, res) => {
    try{
        let result = await db.bankaccount.deleteBankAcc(req.body.bankaccid)
        console.log("query result", result)
        res.send(result)
    }catch (err){
        console.log(err)
    }
  }

  return {
    getBankAccs,
    addBankAcc,
    deleteBankAcc
  };

}