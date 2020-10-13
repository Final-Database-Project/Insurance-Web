module.exports = app => {
    const crearSeguroTransporte = require("../../../controladores/seguro/crearseguroTransporte.controlador")
    const cors = require('cors')
    const aut = require('../../Checkautentification')


    app.post("/crearSeguroTransporte", cors(), crearSeguroTransporte.crear);

    app.get('/Registrar/Seguro/Transporte', aut.checkAuthenticated, (req, res) =>{
        res.render('registroSeguroTransporte.ejs')
    } )
}