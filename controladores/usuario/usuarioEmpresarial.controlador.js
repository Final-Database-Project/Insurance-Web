const UsuarioEmpresarial = require("../../modelos/usuarios/modelo.UsuarioEmpresarial");

exports.crear = (req, res) => {
	if (!req.params) {
		res.status(400).send({
			message: "El contenido no puede estar vacio!",
		});
	}

	const usuarioEmpresarial = new UsuarioEmpresarial({
		Correo: req.query.Correo,
		Contraseña: req.query.Contraseña,
		Nombre: req.query.Nombre,
		Direccion: req.query.Direccion,
		NumeroTelefonico: req.query.NumeroTelefonico,
		RNC: req.query.RNC,
	});

	UsuarioEmpresarial.crear(usuarioEmpresarial, (err, data) => {
		if (err)
			res.status(500).send({
				messaage:
					err.message ||
					"Ha ocurrido un error al intentar crear al usuario empresarial",
			});
		else res.send(data);
	});
};