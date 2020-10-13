module.exports = app => {
    const crearSeguroVidaColectiva = require("../../../controladores/seguro/crearseguroVidaColectiva.controlador")
    const cors = require('cors')
    const aut = require('../../Checkautentification')


    app.post("/crearSeguroVidaColectiva", cors(), crearSeguroVidaColectiva.crear);

    app.get('/Registrar/Seguro/VidaColectiva', aut.checkAuthenticated, (req, res) =>{
        res.render('registroSeguroVidaColectiva.ejs')
    } )
}