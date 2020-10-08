const sql = require("../../src/index");

const Home = function Home(home) {
	this.Correo = home.Correo;
};

Home.findByEmail = (nuevoperfil, result) => {
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
					"SP_Home",
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
					"SP_Home",
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
	);
};

module.exports = Home;
