module.exports = app => {
    const crearSeguro = require("../../../controladores/seguro/crearseguro.controlador")
    const cors = require('cors')

    app.post("/crearSeguro", cors(), crearSeguro.crear);
}