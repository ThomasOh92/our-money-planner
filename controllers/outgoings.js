module.exports = (db) => {

  let getOutgoings = async (req, res) => {
    try{
        const modelRequest = await db.outgoings.getOutgoings(req.cookies.account_id)
        res.send(modelRequest)
    }catch(err){
        console.log(err)
    }
  }

  //via form in modal, no AJAX request
  let addOutgoing = async (req, res) => {
    try {
        let result = await db.outgoings.addOutgoing(req.body.name, req.body.payment, req.body.description ,req.cookies.account_id)
        console.log("query result", result)
        res.redirect('/')
    }catch (err){
        console.log(err)
    }
  }

  let deleteOutgoing = async (req, res) => {
    try{
        let result = await db.outgoings.deleteOutgoing(req.body.outgoingid)
        console.log("query result", result)
        res.send(result)
    }catch (err){
        console.log(err)
    }
  }

  return {
    getOutgoings,
    addOutgoing,
    deleteOutgoing
  };

}