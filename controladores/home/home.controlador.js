const response  = require("express");
const Home = require("../../modelos/home/modelo.home");
const moment = require('moment')

exports.DeleteSeguro = (req, res) => {
	if (!req.params) {
		res.status(400).send({
			message: "Tiene que elegir por lo menos un objeto!",
		});
	}

	const home = new Home({
		idSeguro: req.body.idSeguro
	});

	Home.DeleteSeguro(home, (err, data) => {
		if (err)
			if ((err.kind = "no encontrado")) {
				res.status(404).send({
					message: `El usuario con el id de seguro ${req.body.idSeguro} no puedo ser encontrado`,
				});
			} else {
				res.status(500).send({
					message:
						err.message ||
						"Ha ocurrido un error al intentar eliminar el Seguro" +
							req.body.idSeguro
				});
			}
	});
};

exports.findByEmail = (Correo, result) => {
	try{

		Home.findByEmail(Correo, (err, data) => {
			if (!data)
			{
				result(null, null)
			}
			
			
			for (var i = 0; i < data.length; i++)
			{
				if (data[i].FechaVencimiento)
				data[i].FechaVencimiento = moment(data[i].FechaVencimiento).format('DD-MM-YYYY')
				if(data[i].FechaPago)
				data[i].FechaPago = moment(data[i].FechaPago).format('DD-MM-YYYY')
			}
			console.log(data)
			result(null,data)
		});
	}
	catch(e)
	{
		console.log(e)
	}
};
