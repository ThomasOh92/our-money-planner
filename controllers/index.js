module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let mainPage = (req, res) => {
    res.render('index')
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