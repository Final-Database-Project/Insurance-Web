module.exports = app => {
    const crearSeguroIncendio = require("../../../controladores/seguro/crearseguroincendio.controlador")
    const cors = require('cors')

    app.post("/crearSeguroIncendio", cors(), crearSeguroIncendio.crear);
}