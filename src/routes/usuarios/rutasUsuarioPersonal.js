module.exports = app => {
	const usuarioPersonal = require("../../../controladores/usuario/usuarioPersonal.controlador");
	const cors = require('cors')


	app.post("/usuarioPersonal", cors(), usuarioPersonal.crear);

};
