module.exports = app => {
    const perfil = require("../../../controladores/perfil/perfil.controlador.");
    const aut = require('../../Checkautentification')
    
    const cors = require('cors')

    
    app.get("/Perfil/:Correo", aut.checkAuthenticated, perfil.findByEmail);
}