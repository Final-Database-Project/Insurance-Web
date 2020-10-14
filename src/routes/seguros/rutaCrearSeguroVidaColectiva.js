module.exports = app => {
    const crearSeguroVidaColectiva = require("../../../controladores/seguro/crearseguroVidaColectiva.controlador")
    const aut = require('../../Checkautentification')
    const infoseguro = require('../../../controladores/seguro/infoseguro.comtrolador')


    app.post("/Registrar/Seguro/VidaColectiva", aut.checkAuthenticated, crearSeguroVidaColectiva.crear);

    app.get('/Registrar/Seguro/VidaColectiva', aut.checkAuthenticated, (req, res) =>{
        infoseguro.getInfo( (request, data) =>{
        res.render('registroSeguroVidaColectiva.ejs', {info: data, user: req.user})
        })
    } )
}