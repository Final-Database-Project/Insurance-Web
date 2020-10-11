const { response } = require("express");
const Home = require("../../modelos/home/modelo.home");

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
