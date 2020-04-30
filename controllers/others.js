module.exports = (db) => {

  let getOthers = async (req, res) => {
    try{
        const modelRequest = await db.others.getOthers(req.cookies.account_id)
        res.send(modelRequest)
    }catch(err){
        console.log(err)
    }
  }

  //via form in modal, no AJAX request
  let addOther = async (req, res) => {
    try {
        let result = await db.others.addOther(req.body.title, req.body.comments, req.cookies.account_id)
        console.log("query result", result)
        res.redirect('/')
    }catch (err){
        console.log(err)
    }
  }

  let deleteOther = async (req, res) => {
    try{
        let result = await db.others.deleteOther(req.body.otherid)
        console.log("query result", result)
        res.send(result)
    }catch (err){
        console.log(err)
    }
  }

  return {
    getOthers,
    addOther,
    deleteOther
  };

}