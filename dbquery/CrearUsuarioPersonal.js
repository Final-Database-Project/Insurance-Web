CrearUsuarioPersonal = `INSERT INTO Usuario(idTipoUsuario, Correo, Contraseña, Nombre, Direccion, NumeroTelefonico) VALUES ((SELECT idTipoUsuario from TipoUsuario where idTipoUsuario = 1), '" + correo[i] + "', '" + password[i] + "', '" + nombre[i] + "', '" + direccion[i] + "', '" + NumeroTelefono[i] + "') INSERT INTO UsuarioPersonal(Apellido, Cedula, FechaNacimiento) VALUES ('" + apellido[i] + "', '" + Cedula[i] + "', '" + fechanacimiento[i] + "')`

 module.exports = CrearUsuarioPersonal

