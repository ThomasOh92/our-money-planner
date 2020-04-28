module.exports = (db) => {

  let getNetWorth = async (req, res) => {
    try{
        const modelRequest = await db.networth.getNetWorthFromDatabase(req.cookies.user_id);
        res.send(modelRequest.amount.networth)
    } catch (err){
        console.log(err)
    }
  }

  let updateNetWorth = async (req, res) => {
    try{
        const modelRequest = await db.networth.updateNetWorthInDatabase(req.cookies.user_id, req.body.inputValue)
        res.send(modelRequest)
    } catch(err){
        console.log(err)
    }
  }

  return {
    getNetWorth,
    updateNetWorth
  };

}