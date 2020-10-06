const sql = require("../src/index");

const Usuario = function Usuario(usuario) {
	this.idTipoUsuario = usuario.idTipoUsuario;
	this.Correo = usuario.Correo;
	this.Contraseña = usuario.Contraseña;
	this.Nombre = usuario.Nombre;
	this.Direccion = usuario.Direccion;
	this.NumeroTelefonico = usuario.NumeroTelefonico;
	this.FechaRegistro = usuario.FechaRegistro;
};

Usuario.crear = (nuevousuario, result) => {
	const request = sql.request();
	request.input("idTipoUsuario", nuevousuario.idTipoUsuario);
	request.input("Correo", nuevousuario.Correo);
	request.input("Contraseña", nuevousuario.Contraseña);
	request.input("Nombre", nuevousuario.Nombre);
	request.input("Direccion", nuevousuario.Direccion);
	request.input("NumeroTelefonico", nuevousuario.NumeroTelefonico);

	request.query(
		"Insert into Usuario(idTipoUsuario,Correo,Contraseña,Nombre,Direccion,NumeroTelefonico ) values(@idTipoUsuario, @Correo, @Contraseña, @Nombre, @Direccion, @NumeroTelefonico); SELECT SCOPE_IDENTITY() AS idUsuario;",
		(err, res) => {
			if (err) {
				console.log("error: ", err);
				result(err, null);
				return;
			}
			console.dir(res.recordset[0].idUsuario);
			console.log("Usuario creado: ", {
				idUsuario: res.recordset[0].idUsuario,
				...nuevousuario,
			});
			result(null, {
				idUsuario: res.recordset[0].idUsuario,
				...nuevousuario,
			});
		}
	);
};

Usuario.getAll = (result) => {
	sql.query("Select * from Usuario", (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(null, err);
			return;
		}

		console.log("usuarios: ", res.recordsets);
		result(null, res.recordsets);
	});
};

Usuario.findById = (idUsuario, result) => {
	const request = sql.request();
	request.input("idUsuario", idUsuario);
	request.query(
		"Select * From Usuario Where idUsuario = @idUsuario",
		(err, res) => {
			if (err) {
				console.log("error: ", err);
				result(err, null);
				return;
			}

			if (res.rowsAffected != 0) {
				console.log("Usuario encontrado: ", res.recordset);
				result(null, res.recordset);
				return;
			}

			result({ kind: "no encontrado" }, null);
		}
	);
};

module.exports = Usuario;
