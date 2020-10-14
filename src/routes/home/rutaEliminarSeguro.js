
module.exports = (app) => {
  const passport = require('passport')
  const aut = require('../../Checkautentification')
  const home = require('../../../controladores/home/home.controlador')



  app.get('/Seguro/Eliminar/(:id)', aut.checkAuthenticated, (req, res) => {
    home.DeleteSeguro(req, res)
  })
};
