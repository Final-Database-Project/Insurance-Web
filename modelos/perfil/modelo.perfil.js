const sql = require("../../src/index");

const Perfil = function Pefil(perfil) {
	this.Correo = perfil.Correo;
};

Perfil.findByEmail = (Correo, result) => {
	const request = sql.request();
	var idTipoUsuario = "";
	request.input("Correo", Correo);
	request.query(
		"Select idTipoUsuario from Usuario where Correo = @Correo",
		(err, res) => {
			if (err) {
				console.log("error: ", err);
				result(err, null);
				return;
			}
			if (res.rowsAffected == 0) {
				result({ kind: "no encontrado" }, null);
				return;
			}

			idTipoUsuario = res.recordset[0].idTipoUsuario;


			if (idTipoUsuario == 1) {
				request.execute(
					"SP_Select_UsuarioPersonal_by_email",
					(err, res) => {
						if (err) {
							console.log("error: ", err);
							result(err, null);
							return;
						}
						if (res.rowsAffected == 0) {
							result({ kind: "no encontrado" }, null);
							return;
						}
						result(null, res.recordset[0]);
					}
				);
			} else if (idTipoUsuario == 2) {
				request.execute(
					"SP_Select_UsuarioEmpresarial_by_email",
					(err, res) => {
						if (err) {
							console.log("error: ", err);
							result(err, null);
							return;
						}
						if (res.rowsAffected == 0) {
							result({ kind: "no encontrado" }, null);
							return;
						}
						result(null, res.recordset[0]);
					}
				);
			}
		}
	)
};

Perfil.getUserById = (id, result) =>{
	const request = sql.request();
	var idTipoUsuario = "";
	request.input("idUsuario", id);
	request.query(
		"Select idTipoUsuario from Usuario where idUsuario = @idUsuario",
		(err, res) => {
			if (err) {
				console.log("error: ", err);
				result(err, null);
				return;
			}
			if (res.rowsAffected == 0) {
				result({ kind: "no encontrado" }, null);
				return;
			}

			idTipoUsuario = res.recordset[0].idTipoUsuario;


			if (idTipoUsuario == 1) {
				request.execute(
					"SP_Select_UsuarioPersonal_by_id",
					(err, res) => {
						if (err) {
							console.log("error: ", err);
							result(err, null);
							return;
						}
						if (res.rowsAffected == 0) {
							result({ kind: "no encontrado" }, null);
							return;
						}
						console.log(res.recordset[0])
						result(null, res.recordset[0]);
					}
				);
			} else if (idTipoUsuario == 2) {
				request.execute(
					"SP_Select_UsuarioEmpresarial_by_id",
					(err, res) => {
						if (err) {
							console.log("error: ", err);
							result(err, null);
							return;
						}
						if (res.rowsAffected == 0) {
							result({ kind: "no encontrado" }, null);
							return;
						}
						result(null, res.recordset[0]);
					}
				);
			}
		}
	)
}

module.exports = Perfil;
