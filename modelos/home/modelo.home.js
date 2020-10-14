const sql = require("../../src/index");

const Home = function Home(home) {
	this.idSeguro = home.idSeguro;
	this.idSeguro = home.idSeguro;
	this.Precio = home.Precio;
	this.FechaPago = home.FechaPago;
	this.FechaVencimiento = home.FechaVencimiento;
	this.NombreAsegurador = home.NombreAsegurador;
	this.Direccion = home.Direccion;
	this.NumeroTelefono = home.NumeroTelefono;
	this.NombreTipoSeguro = home.NombreTipoSeguro;
	this.NombreMoneda = home.NombreMoneda;
	this.NombreTipoCliente = home.NombreTipoCliente;
	this.Profesion = home.Profesion;
	this.RazonCompra = home.RazonCompra;
	this.Parentesco = home.Parentesco;
	this.NombrePlan = home.NombrePlan;
	this.Descripcion = home.Descripcion;
	this.NombreTipoTransporte = home.NombreTipoTransporte;
	this.NombreMarca = home.NombreMarca;
	this.NombreMarca = home.NombreModelo;
	this.Matricula = home.Matricula;
	this.Año = home.Año;
};

Home.DeleteSeguro = (nuevohome, result) => {
	const request = sql.request();
	var idSeguro = "";
	request.input("idSeguro", nuevohome.idSeguro);
	request.query(
		"Select idTipoSeguro from Seguro where idSeguro = @idSeguro",
		(err, res) => {
			if (err) {
				console.log("error: ", err);
				return;
			}
			if (res.rowsAffected == 0) {
				return;
			}



			idTipoSeguro = res.recordset[0].idTipoSeguro;

			console.log(res)
			if (idTipoSeguro == 1) {
				request.execute(
					"Delete_Seguro_plus_VidaColectiva",
					(err, res) => {
						if (err) {
							console.log("error: ", err);
							return;
						}
						if (res.rowsAffected == 0) {
							return;
						}
						return;
					}
				);
			} else if (idTipoSeguro == 2) {
				request.execute(
					"Delete_Seguro_plus_Incendio",
					(err, res) => {
						if (err) {
							console.log("error: ", err);
							return;
						}
						if (res.rowsAffected == 0) {
							return;
						}
						return;
					}
				);
			} else if (idTipoSeguro == 3) {
				request.execute(
					"Delete_Seguro_plus_MedioTransporte",
					(err, res) => {
						if (err) {
							console.log("error: ", err);
							return;
						}
						if (res.rowsAffected == 0) {
							result({ kind: "no encontrado" }, null);
							return;
						}
						return;
					}
				);
			} else if (idTipoSeguro == 4) {
				request.execute(
					"Delete_Seguro_plus_Vida",
					(err, res) => {
						if (err) {
							console.log("error: ", err);
							return;
						}
						if (res.rowsAffected == 0) {
							return;
						}
						return;
					}
				);
			} else if (idTipoSeguro == 5) {
				request.execute(
					"Delete_Seguro_plus_Salud",
					(err, res) => {
						if (err) {
							console.log("error: ", err);
							return;
						}
						if (res.rowsAffected == 0) {
							result({ kind: "no encontrado" }, null);
							return;
						}
						return;
					}
				);
			}
		}
	);
};

Home.findByEmail = (Correo, result) => {
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
					"SP_Home_Personal",
					(err, data) => {
						if (err) {
							console.log("error: ", err);
							result(err, null);
							return;
						}
						if (res.rowsAffected == 0) {
							result({ kind: "no encontrado" }, null);
							return;
						}
						result(null, data.recordsets[0]);
					}
				);
			} else if (idTipoUsuario == 2) {
				request.execute(
					"SP_Home_Empresarial",
					(err, data) => {
						if (err) {
							console.log("error: ", err);
							result(err, null);
							return;
						}
						if (res.rowsAffected == 0) {
							result({ kind: "no encontrado" }, null);
							return;
						}
						result(null, data.recordsets[0]);
					}
				);
			}
		}
	);
};

module.exports = Home;
