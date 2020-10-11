const sql = require("../../src/index");

const Home = function Home(home) {
	this.idSeguro = home.idSeguro;
};

Home.DeleteSeguro = (nuevohome, result) => {
	const request = sql.request();
	var idSeguro = "";
	request.input("idSeguro", nuevohome.idSeguro);
	request.query(
		"Select idSeguro from Seguro where idSeguro = @idSeguro",
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

			idTipoSeguro = res.recordset[0].idTipoSeguro;

			if (idTipoSeguro == 1) {
				request.execute(
					"Delete_Seguro_plus_VidaColectiva",
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

						result(null, null);
					}
				);
			} else if (idSeguro == 2) {
				request.execute(
					"Delete_Seguro_plus_Incendio",
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
			} else if (idSeguro == 3) {
				request.execute(
					"Delete_Seguro_plus_MedioTransporte",
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
			} else if (idSeguro == 4) {
				request.execute(
					"Delete_Seguro_plus_Vida",
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
			} else if (idSeguro == 5) {
				request.execute(
					"Delete_Seguro_plus_Salud",
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
