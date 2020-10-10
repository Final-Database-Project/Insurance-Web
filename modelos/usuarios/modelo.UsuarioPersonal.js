const sql = require("../../src/index");
const bcrypt = require('bcrypt')

const UsuarioPersonal = function UsuarioPersonal(usuarioPersonal) {

	this.idUsuario = usuarioPersonal.idUsuario;
	this.idTipoUsuario = usuarioPersonal.idTipoUsuario;
	this.Correo = usuarioPersonal.Correo;
	this.Contraseña = usuarioPersonal.Contraseña;
	this.Nombre = usuarioPersonal.Nombre;
	this.Apellido = usuarioPersonal.Apellido;
	this.Direccion = usuarioPersonal.Direccion;
	this.NumeroTelefonico = usuarioPersonal.NumeroTelefonico;
	this.Cedula = usuarioPersonal.Cedula;
	this.FechaNacimiento = usuarioPersonal.FechaNacimiento;
};

UsuarioPersonal.crear = async (nuevousuario, result) => {
	const request = sql.request();
	bcrypt.genSalt(10, (err, salt) =>{
		bcrypt.hash(nuevousuario.Contraseña, salt, function(err, hash) {
			request.input("Contraseña", hash);
		});
	})
	request.input("Correo", nuevousuario.Correo);
	request.input("Nombre", nuevousuario.Nombre);
	request.input("Direccion", nuevousuario.Direccion);
	request.input("NumeroTelefonico", nuevousuario.NumeroTelefonico);
	request.input("Apellido", nuevousuario.Apellido);
	request.input("Cedula", nuevousuario.Cedula);
	request.input("FechaNacimiento", nuevousuario.FechaNacimiento);

	request.execute("CrearUsuarioPersonal", (err, res) => {
		if (err) {
			console.log("error: ", err);
			return;
		}
		console.log("UsuarioPersonal creado: ", {
			...nuevousuario,
		});
		result(null,res);
	});
};

module.exports = UsuarioPersonal;
