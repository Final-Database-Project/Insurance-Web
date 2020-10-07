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

exports.getAll = (req, res) => {
	UsuarioPersonal.getAll((err, data) => {
		if (err)
			res.status(500).send({
				messaage:
					err.message ||
					"Ha ocurrido un error al intentar buscar todos los usuarios empresariales",
			});
		else res.send(data);
	});
};

exports.findById =(req, res) => {
	UsuarioPersonal.findById(req.params.idUsuarioEmpresarial, (err, data) => {
		if(err){
			if (err.kind === "no encontrado"){
				res.status(404).send({
					message: "No se encontra al usuario empresarial con el id " + req.params.idUsuarioEmpresarial
				});
			}else{
				res.status(500).send({
					message: "Error al intentar encontrar al usuario empresarial con el id" + req.params.idUsuarioEmpresarial
				});
			}	
		} else res.send(data);
	})
}
