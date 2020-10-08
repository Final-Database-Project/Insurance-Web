const sql = require("../../src/index");

const Perfil = function Pefil(perfil) {
	this.Correo = perfil.Correo;
};

Perfil.findByEmail = (nuevoperfil, result) => {
	const request = sql.request();
	var idTipoUsuario = "";
	request.input("Correo", nuevoperfil.Correo);
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
					"SP_Select_UsuarioPersonal_by_id",
					(error, response) => {
						if (err) {
							console.log("error: ", error);
							result(err, null);
							return;
						}
						if (res.rowsAffected == 0) {
							result({ kind: "no encontrado" }, null);
							return;
						}

						result(null, response.recordset[0]);
					}
				);
			} else if (idTipoUsuario == 2) {
				request.execute(
					"SP_Select_UsuarioEmpresarial_by_id",
					(erro, resp) => {
						if (erro) {
							console.log("error: ", erro);
							result(err, null);
							return;
						}
						if (resp.rowsAffected == 0) {
							result({ kind: "no encontrado" }, null);
							return;
						}
						result(null, resp.recordset[0]);
					}
				);
			}
		}
	);
};

module.exports = Perfil;
