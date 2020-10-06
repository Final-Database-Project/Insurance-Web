const Usuario = require("../modelos/modelo.Cliente");

exports.crear = (req, res) => {
	if (!req.params) {
		res.status(400).send({
			message: "El contenido no puede estar vacio!",
		});
	}

	const usuario = new Usuario({
		idUsuario: req.body.idUsuario,
		idTipoUsuario: req.query.idTipoUsuario,
		Correo: req.query.Correo,
		Contraseña: req.query.Contraseña,
		Nombre: req.query.Nombre,
		Direccion: req.query.Direccion,
		NumeroTelefonico: req.query.NumeroTelefonico,
		FechaRegistro: req.body.FechaRegistro,
	});

	Usuario.crear(usuario, (err, data) => {
		if (err)
			res.status(500).send({
				messaage:
					err.message ||
					"Ha ocurrido un error al intentar crear al usuario",
			});
		else res.send(data);
	});
};

exports.getAll = (req, res) => {
	Usuario.getAll((err, data) => {
		if (err)
			res.status(500).send({
				messaage:
					err.message ||
					"Ha ocurrido un error al intentar buscar todos los usuario",
			});
		else res.send(data);
	});
};

exports.findById =(req, res) => {
	Usuario.findById(req.params.idUsuario, (err, data) => {
		if(err){
			if (err.kind === "no encontrado"){
				res.status(404).send({
					message: "No se encontra al usuario con el id " + req.params.idUsuario
				});
			}else{
				res.status(500).send({
					message: "Error al intentar encontrar al cliente con el id" + req.params.idUsuario
				});
			}	
		} else res.send(data);
	})
}
