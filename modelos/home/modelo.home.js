const sql = require("../../src/index");

const Home = function Home(home) {
	this.idSeguro = home.idSeguro;
<<<<<<< HEAD
};

Home.DeleteSeguro = (nuevohome, result) => {
	const request = sql.request();
	var idSeguro = "";
	request.input("idSeguro", nuevohome.idSeguro);
=======
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

Home.findByEmail = (Correo, result) => {
	const request = sql.request();
	var idTipoUsuario = "";
	request.input("Correo", Correo);
>>>>>>> 6919a90a806a615ec58983323be8db69d05f6666
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
<<<<<<< HEAD
					"Delete_Seguro_plus_VidaColectiva",
					(err, res) => {
=======
					"SP_Home_Personal",
					(err, data) => {
>>>>>>> 6919a90a806a615ec58983323be8db69d05f6666
						if (err) {
							console.log("error: ", err);
							result(err, null);
							return;
						}
						if (res.rowsAffected == 0) {
							result({ kind: "no encontrado" }, null);
							return;
						}
<<<<<<< HEAD

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
=======
						result(null, data.recordsets[0]);
>>>>>>> 6919a90a806a615ec58983323be8db69d05f6666
					}
				);
			} else if (idSeguro == 5) {
				request.execute(
<<<<<<< HEAD
					"Delete_Seguro_plus_Salud",
					(err, res) => {
=======
					"SP_Home_Empresarial",
					(err, data) => {
>>>>>>> 6919a90a806a615ec58983323be8db69d05f6666
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
