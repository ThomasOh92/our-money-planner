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
  //Index Page
  const indexController = require('./controllers/index')(allModels)
  app.get('/', indexController.mainPage)

  //Accounts Controller and Routes
  const accountsController = require('./controllers/accounts')(allModels);
  app.get('/registration', accountsController.registrationForm);
  app.post('/registration', accountsController.registerAccount);
  app.get('/login', accountsController.loginForm);
  app.post('/login', accountsController.loginAccount);

  //Users Controller and Routes
  const usersController = require('./controllers/users')(allModels);
  app.get('/registration/users', usersController.createUsersForm);
  app.post('/registration/users', usersController.createUsers);
  app.get('/income', usersController.getIncome)
  app.post('/income/:partnername', usersController.updateIncome)

  //Net Worth Controller and Routes
  const netWorthController = require('./controllers/networth')(allModels)
  app.get('/networth', netWorthController.getNetWorth)
  app.post('/networth', netWorthController.updateNetWorth)

  //Bank Account Controller and Routes
  const bankAccController = require('./controllers/bankaccount')(allModels)
  app.get('/bankaccount', bankAccController.getBankAccs)
  app.post('/bankaccount', bankAccController.addBankAcc)
  app.delete('/bankaccount', bankAccController.deleteBankAcc)

};