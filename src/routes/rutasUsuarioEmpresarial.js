module.exports = app => {
	const usuarioEmpresarial = require("../../controladores/usuarioEmpresarial.controlador");

	app.post("/usuarioEmpresarial", usuarioEmpresarial.crear);

	app.get("/usuarioEmpresarial", usuarioEmpresarial.getAll);

	app.get("/usuarioEmpresarial/:idUsuarioEmpresarial", usuarioEmpresarial.findById);
};
