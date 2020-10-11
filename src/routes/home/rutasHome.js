module.exports = app => {
    const home = require("../../../controladores/home/home.controlador");

    app.get("/Home", home.DeleteSeguro);
}