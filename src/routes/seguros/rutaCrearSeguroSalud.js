module.exports = app => {
    const crearSeguroSalud = require("../../../controladores/seguro/crearsegurosalud.controlador")
    const cors = require('cors')
    const aut = require('../../Checkautentification')

    app.post("/crearSeguroSalud", cors(), crearSeguroSalud.crear);

    app.get('/Registrar/Seguro/Salud', aut.checkAuthenticated, (req, res) =>{
        res.render('registroSeguroSalud.ejs')
    } )
}