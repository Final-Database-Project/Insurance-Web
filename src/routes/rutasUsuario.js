module.exports = app => {
	const usuario = require("../../controladores/usuario.controlador");

	app.post("/usuarios", usuario.crear);

	app.get("/usuarios", usuario.getAll);
};
