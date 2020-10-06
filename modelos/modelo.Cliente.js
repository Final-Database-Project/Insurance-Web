const sql = require("../src/index");

const Usuario = function Usuario(usuario) {
	this.idTipoUsuario = usuario.idTipoUsuario;
	this.Correo = usuario.Correo;
	this.Contraseña = usuario.Contraseña;
	this.Nombre = usuario.Nombre;
	this.Direccion = usuario.Direccion;
	this.NumeroTelefonico = usuario.NumeroTelefonico;
};

Usuario.crear = (nuevousuario, result) => {
	console.dir(nuevousuario);
	const request = sql.request();
	request.input('idTipoUsuario', nuevousuario.idTipoUsuario);
	request.input('Correo', nuevousuario.Correo);
	request.input('Contraseña', nuevousuario.Contraseña);
	request.input('Nombre', nuevousuario.Nombre);
	request.input('Direccion', nuevousuario.Direccion);
	request.input('NumeroTelefonico', nuevousuario.NumeroTelefonico)

	request.query("Insert into Usuario(idTipoUsuario,Correo,Contraseña,Nombre,Direccion,NumeroTelefonico ) values(@idTipoUsuario, @Correo, @Contraseña, @Nombre, @Direccion, @NumeroTelefonico)", (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}
		console.log("Usuario creado: ", { idUsuario: res.idUsuario, ...nuevousuario });
		result(null, { idUsuario: res.idUsuario, ...nuevousuario });
	});
};

Usuario.getAll = (result) => {
	sql.query("Select * from Usuario", (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(null, err);
			return;
		}

		console.log("usuarios: ", res);
		result(null, res);
	});
};

module.exports = Usuario;
