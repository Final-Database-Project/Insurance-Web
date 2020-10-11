const sql = require("../../src/index");

const Home = function Home(home) {
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
