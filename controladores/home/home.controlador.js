const { response } = require("express");
const Home = require("../../modelos/home/modelo.home");

exports.DeleteSeguro = (req, res) => {
	if (!req.params) {
		res.status(400).send({
			message: "Tiene que elegir por lo menos un objeto!",
		});
	}

	const home = new Home({
		idSeguro: req.query.idSeguro
	});

	Home.DeleteSeguro(home, (err, data) => {
		if (err)
			if ((err.kind = "no encontrado")) {
				res.status(404).send({
					message: `El usuario con el correo ${req.query.idSeguro} no puedo ser encontrado`,
				});
			} else {
				res.status(500).send({
					message:
						err.message ||
						"Ha ocurrido un error al intentar buscar el Seguro" +
							req.query.idSeguro,
				});
			}
		else res.send(data);
	});
};

exports.findByEmail = (Correo, result) => {
	try{

		Home.findByEmail(Correo, (err, data) => {
			if (!data)
			{
				result(null, null)
			}else{
			const home = new Home({
				idSeguro: data.idSeguro,
				Precio: data.Precio,
				FechaPago: data.FechaPago,
				FechaVencimiento: data.FechaVencimiento,
				NombreAsegurador: data.NombreAsegurador,
				Direccion: data.Direccion,
				NumeroTelefono: data.NumeroTelefono,
				NombreTipoSeguro: data.NombreTipoSeguro,
				NombreMoneda: data.NombreMoneda,
				NombreTipoCliente: data.NombreTipoCliente,
				Profesion: data.Profesion,
				RazonCompra: data.RazonCompra,
				Parentesco: data.Parentesco,
				NombrePlan: data.NombrePlan,
				Descripcion: data.Descripcion,
				NombreTipoTransporte: data.NombreTipoTransporte,
				NombreMarca: data.NombreMarca,
				NombreMarca: data.NombreModelo,
				Matricula: data.Matricula,
				Año: data.Año,
			})
			result(null,data)
		}
			

		});
	}
	catch(e)
	{
		console.log(e)
	}
};
