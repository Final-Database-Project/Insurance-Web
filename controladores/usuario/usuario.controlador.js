const Perfil = require("../../modelos/perfil/modelo.perfil");
const UsuarioEmpresarial = require("../../modelos/usuarios/modelo.UsuarioEmpresarial");
const UsuarioPersonal = require("../../modelos/usuarios/modelo.UsuarioPersonal");
require("../../modelos/usuarios/modelo.UsuarioPersonal")
require("../../modelos/usuarios/modelo.UsuarioEmpresarial")
exports.findByEmail =  async (Correo, result) => {
	try{
		Perfil.findByEmail(Correo, (err, data) => {
			if(!data)
			{
				result(null, null)

			}else if(data.idTipoUsuario == 1){
				console.log
				const usuario = new UsuarioPersonal({
					idUsuario: data.idUsuario,
					idTipoUsuario: data.idTipoUsuario,
					Correo: data.Correo,
					Contraseña: data.Contraseña,
					Nombre: data.Nombre,
					Direccion: data.Direccion,
					NumeroTelefonico: data.NumeroTelefonico,
					Apellido: data.Apellido,
					Cedula: data.Cedula,
					FechaNacimiento: data.FechaNacimiento,
					
				});	
				console.log(usuario)
				result(null, usuario)

			}else if(data.idTipoUsuario == 2){
				const usuario = new UsuarioEmpresarial({
					idUsuario: data.idUsuario,
					idTipoUsuario: data.idTipoUsuario,
					Correo: data.Correo,
					Contraseña: data.Contraseña,
					Nombre: data.Nombre,
					Direccion: data.Direccion,
					NumeroTelefonico: data.NumeroTelefonico,
					RNC: data.RNC
				});	
				result(null, usuario)
			}
		});


	}
	catch(e)
	{
		console.log(e)
	}
};

exports.getUserById = (id, result) =>{
	try{
		Perfil.getUserById(id, (err, data) => {
			if(!data)
			{
				result(null, null)

			}else if(data.idTipoUsuario == 1){
				console.log
				const usuario = new UsuarioPersonal({
					idUsuario: data.idUsuario,
					idTipoUsuario: data.idTipoUsuario,
					Correo: data.Correo,
					Contraseña: data.Contraseña,
					Nombre: data.Nombre,
					Direccion: data.Direccion,
					NumeroTelefonico: data.NumeroTelefonico,
					Apellido: data.Apellido,
					Cedula: data.Cedula,
					FechaNacimiento: data.FechaNacimiento,
					
				});	
				console.log(usuario)
				result(null, usuario)

			}else if(data.idTipoUsuario == 2){
				const usuario = new UsuarioEmpresarial({
					idUsuario: data.idUsuario,
					idTipoUsuario: data.idTipoUsuario,
					Correo: data.Correo,
					Contraseña: data.Contraseña,
					Nombre: data.Nombre,
					Direccion: data.Direccion,
					NumeroTelefonico: data.NumeroTelefonico,
					RNC: data.RNC
				});	
				result(null, usuario)
			}
		});


	}
	catch(e)
	{
		console.log(e)
	}
}