const UsuarioPersonal = require("../../modelos/usuarios/modelo.UsuarioPersonal");

exports.crear = (req, res) => {
	if (!req.params) {
		res.status(400).send({
			message: "El contenido no puede estar vacio!",
		});
	}

	const usuarioPersonal = new UsuarioPersonal({
		Correo: req.query.Correo,
		Contraseña: req.query.Contraseña,
		Nombre: req.query.Nombre,
		Direccion: req.query.Direccion,
        NumeroTelefonico: req.query.NumeroTelefonico,
        Apellido: req.query.Apellido,
        Cedula: req.query.Cedula,
        FechaNacimiento: req.query.FechaNacimiento,
	});

	UsuarioPersonal.crear(usuarioPersonal, (err, data) => {
		if (err)
			res.status(500).send({
				messaage:
					err.message ||
					"Ha ocurrido un error al intentar crear al usuario empresarial",
			});
		else res.send(data);
	});
};
