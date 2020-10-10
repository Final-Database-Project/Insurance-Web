const sql = require("../../src/index");

const Usuario = function Usuario(usuario) {
	this.idUsuario = usuario.idUsuario;
	this.idTipoUsuario = usuario.idTipoUsuario;
	this.Correo = usuario.Correo;
	this.Contraseña = usuario.Contraseña;
	this.Nombre = usuario.Nombre;
	this.Direccion = usuario.Direccion;
	this.NumeroTelefonico = usuario.NumeroTelefonico;
};

Usuario.findByEmail = (Correo, result) => {
	const request = sql.request();
	request.input("Correo", Correo);
	request.query("Select * from Usuario where Correo = @Correo", (err, res) =>{
		if(err){
			result(err, null)
		}
		result(null, res.recordset[0])
	})
	
};

Usuario.getUserById = (id, result) =>{
	const request = sql.request();
	request.input("idUsuario", id);
	request.query("Select * from Usuario where idUsuario = @idUsuario", (err, res) =>{
		if(err){
			result(err, null)
		}
		result(null, res.recordset[0])
	})
}

module.exports = Usuario;
