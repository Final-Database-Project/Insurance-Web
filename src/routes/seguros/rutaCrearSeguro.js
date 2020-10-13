const aut = require('../../Checkautentification')
module.exports = app => {

    app.get("/Registrar/Seguro", aut.checkAuthenticated, (req ,res) => {
        res.render('registroSeguro.ejs', req)
    });
}