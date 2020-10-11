const UsuarioEmpresarial = require("../../modelos/usuarios/modelo.UsuarioEmpresarial");

exports.crear = (req, res) => {
	try{
		if (!req.params) {
		res.status(400).send({
			message: "El contenido no puede estar vacio!",
		});
		}

	const usuarioEmpresarial = new UsuarioEmpresarial({
		Correo: req.body.Correo,
		Contraseña: req.body.Contraseña,
		Nombre: req.body.Nombre,
		Direccion: req.body.Direccion,
		NumeroTelefonico: req.body.NumeroTelefonico,
		RNC: req.body.RNC,
	});

	UsuarioEmpresarial.crear(usuarioEmpresarial, (err, res) => {
		if (err)
			res.status(500).send({
				messaage:
					err.message ||
					"Ha ocurrido un error al intentar crear al usuario empresarial",
			});

	});
	console.log("redirecting success...")
	res.redirect('/login')
	
}catch(e){
	console.log(e)
	console.log("redirecting error...")
	res.redirect('/register/Empresarial')
}
};