module.exports = app => {
    const crearSeguroSalud = require("../../../controladores/seguro/crearsegurosalud.controlador")
    const aut = require('../../Checkautentification')
    const infoseguro = require('../../../controladores/seguro/infoseguro.comtrolador')

    app.post("/Registrar/Seguro/Salud",  aut.checkAuthenticated, crearSeguroSalud.crear);

    app.get('/Registrar/Seguro/Salud', aut.checkAuthenticated, (req, res) =>{
        infoseguro.getInfo( (request, data) =>{
        res.render('registroSeguroSalud.ejs', {info: data, user: req.user})
        })
    } )
}
