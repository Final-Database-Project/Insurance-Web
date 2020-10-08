module.exports = app => {
    const perfil = require("../../../controladores/perfil/perfil.controlador.");

    app.get("/Perfil", perfil.findByEmail);
}