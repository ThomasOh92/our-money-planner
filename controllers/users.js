module.exports = (db) => {

  let registrationForm = (req, res) => {
    res.render('users/register')
  }

  let registerUser = async (req, res) => {
    try {
        const modelRequest = await db.users.registerUser(req.body.username, req.body.password)
        res.cookie('loggedin', modelRequest.currentSessionCookie)
        res.cookie('username', modelRequest.queryResult.username)
        res.cookie('user_id', modelRequest.queryResult.id)
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }
  }

  let loginForm = (req, res) => {
    res.render('users/login')
  }

  let loginUser = async (req, res) => {
    try{
        const modelRequest = await db.users.verifyLogin(req.body.username, req.body.password);
        if (modelRequest.loginSuccess) {
            res.cookie('loggedin', modelRequest.currentSessionCookie)
            res.cookie('username', modelRequest.queryResult.username)
            res.cookie('user_id', modelRequest.queryResult.id)
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
    registerUser,
    loginForm,
    loginUser
  };

}