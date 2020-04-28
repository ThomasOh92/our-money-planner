module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let mainPage = (req, res) => {
    if (req.cookies.loggedin){
        res.render('index')
    } else {
        res.redirect('/login')
    }
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    mainPage
  };

}