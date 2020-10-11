module.exports = app => {
	const usuarioEmpresarial = require("../../../controladores/usuario/usuarioEmpresarial.controlador");
	const cors = require('cors')


	app.post("/usuarioEmpresarial", cors(), usuarioEmpresarial.crear);
};
