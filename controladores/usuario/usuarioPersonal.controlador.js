const UsuarioPersonal = require("../../modelos/usuarios/modelo.UsuarioPersonal")



exports.crear = (req, res) => {
	try{
		if (!req.params) {
			res.status(400).send({
				message: "El contenido no puede estar vacio!",
			})
		}
	
		const usuarioPersonal = new UsuarioPersonal({
			Correo: req.body.Correo,
			Contraseña: req.body.Contraseña,
			Nombre: req.body.Nombre,
			Direccion: req.body.Direccion,
			NumeroTelefonico: req.body.NumeroTelefonico,
			Apellido: req.body.Apellido,
			Cedula: req.body.Cedula,
			FechaNacimiento: req.body.FechaNacimiento,
		})
	
		UsuarioPersonal.crear(usuarioPersonal, (err, res) => {
			if (err){
				res.status(500).send({
					messaage:
						err.message ||
						"Ha ocurrido un error al intentar crear al usuario personal",
				})
			}

		})
		console.log("redirecting success...")
		res.redirect('/login')
	}
	catch(e){
		console.log(e)
		console.log("redirecting error...")
		res.redirect('/register/Personal')
	}

}
