module.exports = (db) => {

  let registrationForm = (req, res) => {
    res.render('accounts/register')
  }

  let registerAccount = async (req, res) => {
    try {
        const modelRequest = await db.accounts.registerAccount(req.body.accountname, req.body.password)
        res.cookie('loggedin', modelRequest.currentSessionCookie)
        res.cookie('accountname', modelRequest.queryResult.accountname)
        res.cookie('account_id', modelRequest.queryResult.id)
        res.redirect('/registration/users')
    } catch (err) {
        console.log(err)
    }
  }

  let loginForm = (req, res) => {
    res.render('accounts/login')
  }

  let loginAccount = async (req, res) => {
    try{
        const modelRequest = await db.accounts.verifyLogin(req.body.accountname, req.body.password);
        if (modelRequest.loginSuccess) {
            res.cookie('loggedin', modelRequest.currentSessionCookie)
            res.cookie('accountname', modelRequest.queryResult.accountname)
            res.cookie('account_id', modelRequest.queryResult.id)
            res.cookie('currentpartner', modelRequest.partnerA)
            res.cookie('partnerA', modelRequest.partnerA)
            res.cookie('partnerB', modelRequest.partnerB)
            res.redirect('/')
        } else {
            res.send("log in failed, try again?")
        }
    } catch (err){
        console.log(err)
    }
  }

  return {
    registrationForm,
    registerAccount,
    loginForm,
    loginAccount
  };

}