module.exports = app => {
	const usuarioPersonal = require("../../../controladores/usuario/usuarioPersonal.controlador");

	app.post("/usuarioPersonal", usuarioPersonal.crear);

};
