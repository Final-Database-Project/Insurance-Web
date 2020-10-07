const sql = require("../../src/index");

const UsuarioPersonal = function UsuarioPersonal(usuarioPersonal) {
	this.Correo = usuarioPersonal.Correo;
	this.Contraseña = usuarioPersonal.Contraseña;
	this.Nombre = usuarioPersonal.Nombre;
	this.Apellido = usuarioPersonal.Apellido;
	this.Direccion = usuarioPersonal.Direccion;
	this.NumeroTelefonico = usuarioPersonal.NumeroTelefonico;
	this.Cedula = usuarioPersonal.Cedula;
	this.FechaNacimiento = usuarioPersonal.FechaNacimiento;
};

UsuarioPersonal.crear = (nuevousuario, result) => {
	const request = sql.request();
	request.input("Correo", nuevousuario.Correo);
	request.input("Contraseña", nuevousuario.Contraseña);
	request.input("Nombre", nuevousuario.Nombre);
	request.input("Direccion", nuevousuario.Direccion);
	request.input("NumeroTelefonico", nuevousuario.NumeroTelefonico);
	request.input("Apellido", nuevousuario.Apellido);
	request.input("Cedula", nuevousuario.Cedula);
	request.input("FechaNacimiento", nuevousuario.FechaNacimiento)

	request.execute("CrearUsuarioPersonal", (err) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}
		request.query(
			"SELECT IDENT_CURRENT('Usuario') As idUsuario; SELECT IDENT_CURRENT('UsuarioPersonal') As idUsuarioPersonal",
			(error, res) => {
				if (err) {
					console.log("error: ", err);
					result(err, null);
					return;
				}
				console.dir(res.recordset[0].idUsuario);
				console.log("UsuarioPersonal creado: ", {
					idUsuario: res.recordsets[0][0].idUsuario,
					...nuevousuario,
					idUsuarioPersonal: res.recordsets[1][0].idUsuarioPersonal,
				});
				result(null, {
					idUsuario: res.recordset[0].idUsuario,
					...nuevousuario,
					idUsuarioPersonal: res.recordsets[1][0].idUsuarioPersonal,
				});
			}
		);
	});
};

UsuarioPersonal.getAll = (result) => {
	sql.query("Select * from UsuarioPersonal", (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(null, err);
			return;
		}
		console.log("usuarios: ", res.recordsets);
		result(null, res.recordsets);
	});
};

UsuarioPersonal.findById = (idUsuario, result) => {
	const request = sql.request();
	request.input("idUsuario", idUsuario);
	request.query(
		"Select * From UsuarioPersonal Where idUsuarioPersonal = @idUsuarioPersonal",
		(err, res) => {
			if (err) {
				console.log("error: ", err);
				result(err, null);
				return;
			}

      if (res.rowsAffected != 0) {
        console.log("UsuarioPersonal encontrado: ", res.recordset);
        result(null, res.recordset);
        return;
      }

      result({ kind: "no encontrado" }, null);
    }
  );
};

module.exports = UsuarioPersonal;
