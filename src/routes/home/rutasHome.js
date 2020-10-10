module.exports = app => {
    const perfil = require("../../../controladores/home/home.controlador.");

    app.get("/Home", Home.findByEmail);
}