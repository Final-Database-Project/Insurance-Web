const CrearSeguroVidaPersonal = require("../../../modelos/seguro/modelo.CrearSeguroVidaPersonal");

module.exports = (app) => {
  const crearSeguroVidaPersonal = require("../../../controladores/seguro/crearseguroVidaPersonal.controlador");
  const cors = require("cors");

  app.post("/crearSeguroVidaPersonal", cors(), crearSeguroVidaPersonal.crear);
};
