CrearUsuarioEmpresarial = `INSERT INTO Usuario(idTipoUsuario, Correo, Contraseña, Nombre, Direccion, NumeroTelefonico) VALUES ((SELECT idTipoUsuario from TipoUsuario where idTipoUsuario = 2), '" + correo[i] + "', '" + password[i] + "', '" + nombre[i] + "', '" + direccion[i] + "', '" + NumeroTelefono[i] + "') INSERT INTO UsuarioEmpresarial(RNC) VALUES ('" + RNC[i] + "')`

module.exports = CrearUsuarioEmpresarial