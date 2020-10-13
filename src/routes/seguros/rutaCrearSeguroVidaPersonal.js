const CrearSeguroVidaPersonal = require("../../../modelos/seguro/modelo.CrearSeguroVidaPersonal");

module.exports = (app) => {
  const crearSeguroVidaPersonal = require("../../../controladores/seguro/crearseguroVidaPersonal.controlador");
  const cors = require("cors");
  const aut = require('../../Checkautentification')


  app.post("/crearSeguroVidaPersonal", cors(), crearSeguroVidaPersonal.crear);

  app.get('/Registrar/Seguro/VidaPersonal', aut.checkAuthenticated, (req, res) =>{
    res.render('registroSeguroVidaPersonal.ejs')
} )
};
