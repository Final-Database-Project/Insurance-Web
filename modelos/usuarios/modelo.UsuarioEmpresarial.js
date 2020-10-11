const sql = require("../../src/index");
const bcrypt = require('bcrypt')

const UsuarioEmpresarial = function UsuarioEmpresarial(usuarioEmpresarial) {
	this.idUsuario = usuarioEmpresarial.idUsuario;
	this.idTipoUsuario = usuarioEmpresarial.idTipoUsuario;
	this.Correo = usuarioEmpresarial.Correo;
	this.Contraseña = usuarioEmpresarial.Contraseña;
	this.Nombre = usuarioEmpresarial.Nombre;
	this.Direccion = usuarioEmpresarial.Direccion;
	this.NumeroTelefonico = usuarioEmpresarial.NumeroTelefonico;
	this.RNC = usuarioEmpresarial.RNC;
};

UsuarioEmpresarial.crear = (nuevousuario, result) => {
	const request = sql.request();
	bcrypt.genSalt(10, (err, salt) =>{
		bcrypt.hash(nuevousuario.Contraseña, salt, function(err, hash) {
			request.input("Contraseña", hash);
		});
	})
	request.input("Correo", nuevousuario.Correo);;
	request.input("Nombre", nuevousuario.Nombre);
	request.input("Direccion", nuevousuario.Direccion);
	request.input("NumeroTelefonico", nuevousuario.NumeroTelefonico);
	request.input("RNC", nuevousuario.RNC);

	request.execute("CrearUsuarioEmpresarial", (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}
		console.log("UsuarioEmpresarial creado: ", { ...nuevousuario });
		result(null, res);
	});
};

module.exports = UsuarioEmpresarial;
