const Usuario = require("../../modelos/usuarios/modelo.Usuario");
exports.findByEmail =  async (Correo, result) => {
	try{


		Usuario.findByEmail(Correo, (err, data) => {
			if(!data)
			{
				result(null, null)
				return;
			}
			const usuario = new Usuario({
				idUsuario: data.idUsuario,
				idTipoUsuario: data.idTipoUsuario,
				Correo: data.Correo,
				Contraseña: data.Contraseña,
				Nombre: data.Nombre,
				Direccion: data.Direccion,
				NumeroTelefonico: data.NumeroTelefonico,
			});
			
			result(null, usuario)

		});

	}
	catch(e)
	{
		console.log(e)
	}
};

exports.getUserById = (id, result) =>{
	try{


		Usuario.getUserById(id, (err, data) => {
			if(!data)
			{
				result(null, null)
				return;
			}
			const usuario = new Usuario({
				idUsuario: data.idUsuario,
				idTipoUsuario: data.idTipoUsuario,
				Correo: data.Correo,
				Contraseña: data.Contraseña,
				Nombre: data.Nombre,
				Direccion: data.Direccion,
				NumeroTelefonico: data.NumeroTelefonico,
			});
			
			result(null, usuario)

		});

	}
	catch(e)
	{
		console.log(e)
	}
}