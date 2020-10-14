const CrearSeguro = require("../../modelos/seguro/modelo.CrearSeguro");

exports.crear = (req, res) => {
	if (!req.params) {
		res.status(400).send({
			message: "El contenido no puede estar vacio!",
		});
	}

	const crearSeguro = new CrearSeguro({
		idAsegurador: req.body.idAsegurador,
		idTipoSeguro: req.body.idTipoSeguro,
		idMoneda: req.body.idMoneda,
		idTipoCliente: req.body.idTipoCliente,
		Poliza: req.body.Poliza,
		intermediario: req.body.intermediario,
		precio: req.body.precio,
		fechaPago: req.body.fechaPago,
		fechaVencido: req.body.fechaVencido,
	});

	CrearSeguro.crear(crearSeguro, (err, data) => {
		if (err) {
			res.status(500).send({
				message:
					err.message || "Ha ocurrido un error al crear el seguro.",
			});
		}
		
		console.log("redirecting success...")
		res.redirect('/home')
		return;
	
	});
};
