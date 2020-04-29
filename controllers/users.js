module.exports = (db) => {

  let createUsersForm = (req, res) => {
    res.render('users/createusers')
  }

  let createUsers = async (req, res) => {
    try {
        const modelRequest = await db.users.createUsers(req.cookies.account_id, req.body.partnera, req.body.partnerb)
        res.cookie('currentpartner', modelRequest.partnerA)
        res.cookie('partnerA', modelRequest.partnerA)
        res.cookie('partnerB', modelRequest.partnerB)
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }
  }

  return {
    createUsersForm,
    createUsers
  };

}

// {"partnerA":
// {"id":1,"account_id":6,"username":"Simeone","income":"~ / month"},
// "partnerB":
// {"id":2,"account_id":6,"username":"Klopp","income":"~ / month"}
//     }