module.exports = app => {
    const crearSeguroTransporte = require("../../../controladores/seguro/crearseguroTransporte.controlador")
    const aut = require('../../Checkautentification')
    const infoseguro = require('../../../controladores/seguro/infoseguro.comtrolador')


    app.post("/Registrar/Seguro/Transporte", aut.checkAuthenticated, crearSeguroTransporte.crear);

    app.get('/Registrar/Seguro/Transporte', aut.checkAuthenticated, (req, res) =>{
        infoseguro.getInfo( (request, data) =>{
        res.render('registroSeguroTransporte.ejs', {info: data, user: req.user})
        })
    } )
}