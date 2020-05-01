module.exports = (db) => {

  let getStickyNotes = async (req, res) => {
    try{
        const modelRequest = await db.stickynotes.getStickyNotes(req.cookies.account_id)
        res.send(modelRequest)
    }catch(err){
        console.log(err)
    }
  }

  let addStickyNote = async (req, res) => {
    try {
        let result = await db.stickynotes.addStickyNote(req.cookies.currentpartner, req.body.content, req.body.xcoord, req.body.ycoord, req.cookies.account_id)
        console.log("query result", result)
        res.redirect('/')
    }catch (err){
        console.log(err)
    }
  }

  let deleteStickyNote = async (req, res) => {
    try{
        let result = await db.stickynotes.deleteStickyNote(req.body.stickynoteid)
        console.log("query result", result)
        res.send(result)
    }catch (err){
        console.log(err)
    }
  }

  return {
    getStickyNotes,
    addStickyNote,
    deleteStickyNote
  };

}