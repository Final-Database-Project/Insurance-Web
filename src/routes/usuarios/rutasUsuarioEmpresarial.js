module.exports = app => {
	const usuarioEmpresarial = require("../../../controladores/usuario/usuarioEmpresarial.controlador");

	app.post("/usuarioEmpresarial", usuarioEmpresarial.crear);
};
