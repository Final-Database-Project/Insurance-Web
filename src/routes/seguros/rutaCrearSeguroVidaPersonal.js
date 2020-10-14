const CrearSeguroVidaPersonal = require("../../../modelos/seguro/modelo.CrearSeguroVidaPersonal");

module.exports = (app) => {
  const crearSeguroVidaPersonal = require("../../../controladores/seguro/crearseguroVidaPersonal.controlador");
  const aut = require('../../Checkautentification')
  const infoseguro = require('../../../controladores/seguro/infoseguro.comtrolador')


  app.post("/Registrar/Seguro/VidaPersonal", aut.checkAuthenticated, crearSeguroVidaPersonal.crear);

  app.get('/Registrar/Seguro/VidaPersonal', aut.checkAuthenticated, (req, res) =>{
    infoseguro.getInfo( (request, data) =>{
    res.render('registroSeguroVidaPersonal.ejs', {info: data, user: req.user})
    })
} )
};
