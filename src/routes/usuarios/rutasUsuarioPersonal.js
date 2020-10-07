module.exports = app => {
	const usuarioPersonal = require("../../../controladores/usuario/usuarioPersonal.controlador");

	app.post("/usuarioPersonal", usuarioPersonal.crear);

	app.get("/usuarioPersonal", usuarioPersonal.getAll);

	app.get("/usuarioPersonal/:idUsuarioPersonal", usuarioPersonal.findById);
};
