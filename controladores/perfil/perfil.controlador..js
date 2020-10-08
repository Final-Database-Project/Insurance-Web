const Perfil = require("../../modelos/perfil/modelo.perfil");

exports.findByEmail = (req, res) => {
	if (!req.params) {
		res.status(400).send({
			message: "El contenido no puede estar vacio!",
		});
	}

	const perfil = new Perfil({
		Correo: req.query.Correo,
	});

	Perfil.findByEmail(perfil, (err, data) => {
		if (err)
			if ((err.kind = "no encontrado")) {
				res.status(404).send({
					message: `El usuario con el correo ${req.query.Correo} no puedo ser encontrado`,
				});
			} else {
				res.status(500).send({
					message:
						err.message ||
						"Ha ocurrido un error al intentar buscar el perfil del usuario con el correo " +
							req.query.Correo,
				});
			}
		else res.send(data);
	});
};
