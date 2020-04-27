module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller

  //Index Page
  const indexController = require('./controllers/index')(allModels)
  app.get('/', indexController.mainPage)
  //Users Controller and Routes
  // const usersController = require('./controllers/users')(allModels);
  // app.get('/registration', usersController.registrationForm);

};