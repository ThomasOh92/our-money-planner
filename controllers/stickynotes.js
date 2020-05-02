module.exports = (db) => {

  let getStickyNotes = async (req, res) => {
    try{
        const modelRequest = await db.stickynotes.getStickyNotes(req.cookies.account_id)
        res.send(modelRequest)
    }catch(err){
        console.log(err)
    }
  }

  let saveStickyNotes = async (req, res) =>{
    console.log(req.body)
    try {
        let deleteInfo = await db.stickynotes.deleteStickyNotes(req.cookies.account_id)

        console.log(deleteInfo)

        for (let el of req.body){
            let insertInfo = await db.stickynotes.insertStickyNotes(el.username, el.content, el.xcoord, el.ycoord, req.cookies.account_id, el.height, el.width)
            console.log(insertInfo)
        }

        res.send("done")

    }catch (err){
        console.log(err)
    }
  }


  return {
    getStickyNotes,
    saveStickyNotes
  };

}