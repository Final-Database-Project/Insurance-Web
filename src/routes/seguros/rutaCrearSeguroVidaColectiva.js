module.exports = app => {
    const crearSeguroVidaColectiva = require("../../../controladores/seguro/crearseguroVidaColectiva.controlador")
    const cors = require('cors')

    app.post("/crearSeguroVidaColectiva", cors(), crearSeguroVidaColectiva.crear);
}