module.exports = app => {
    const crearSeguro = require("../../../controladores/seguro/crearseguro.controlador")

    app.post("/crearSeguro", crearSeguro.crear);
}