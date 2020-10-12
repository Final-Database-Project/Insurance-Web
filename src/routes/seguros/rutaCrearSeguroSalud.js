module.exports = app => {
    const crearSeguroSalud = require("../../../controladores/seguro/crearsegurosalud.controlador")
    const cors = require('cors')

    app.post("/crearSeguroSalud", cors(), crearSeguroSalud.crear);
}