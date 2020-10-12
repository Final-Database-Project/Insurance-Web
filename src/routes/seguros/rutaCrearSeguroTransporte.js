module.exports = app => {
    const crearSeguroTransporte = require("../../../controladores/seguro/crearseguroTransporte.controlador")
    const cors = require('cors')

    app.post("/crearSeguroTransporte", cors(), crearSeguroTransporte.crear);
}