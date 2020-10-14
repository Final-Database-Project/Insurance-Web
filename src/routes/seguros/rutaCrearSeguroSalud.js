module.exports = app => {
    const crearSeguroSalud = require("../../../controladores/seguro/crearsegurosalud.controlador")
    const aut = require('../../Checkautentification')
    const infoseguro = require('../../../controladores/seguro/infoseguro.comtrolador')

    app.post("/crearSeguroSalud", crearSeguroSalud.crear);

    app.get('/Registrar/Seguro/Salud', aut.checkAuthenticated, (req, res) =>{
        infoseguro.getInfo( (request, data) =>{
            console.log("Data: ", data)
            res.render('registroSeguroSalud.ejs', {info: data, user: req.user})
        })
    })
}
