module.exports = app => {
	const usuarioPersonal = require("../../controladores/usuarioPersonal.controlador");

	app.post("/usuarioPersonal", usuarioPersonal.crear);

	app.get("/usuarioPersonal", usuarioPersonal.getAll);

	app.get("/usuarioPersonal/:idUsuarioPersonal", usuarioPersonal.findById);
};
