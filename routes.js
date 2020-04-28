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

  //Users Controller and Routes
  const usersController = require('./controllers/users')(allModels);
  app.get('/registration', usersController.registrationForm);
  app.post('/registration', usersController.registerUser);
  app.get('/login', usersController.loginForm);
  app.post('/login', usersController.loginUser);

  //Index Page
  const indexController = require('./controllers/index')(allModels)
  app.get('/', indexController.mainPage)

  //Net Worth Controller and Routes
  const netWorthController = require('./controllers/networth')(allModels)
  app.get('/networth', netWorthController.getNetWorth)
  app.post('/networth', netWorthController.updateNetWorth)

};