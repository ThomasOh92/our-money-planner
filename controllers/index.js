module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let mainPage = (req, res) => {
    if (req.cookies.loggedin){
        const data = {partnerA: req.cookies.partnerA,
                      partnerB: req.cookies.partnerB,
                      currentPartner: req.cookies.currentpartner}
        res.render('index', data)
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