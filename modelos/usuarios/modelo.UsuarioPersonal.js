const sql = require("../../src/index");

const UsuarioPersonal = function UsuarioPersonal(usuarioPersonal) {
  this.Correo = usuarioPersonal.Correo;
  this.Contraseña = usuarioPersonal.Contraseña;
  this.Nombre = usuarioPersonal.Nombre;
  this.Apellido = usuarioPersonal.Apellido;
  this.Direccion = usuarioPersonal.Direccion;
  this.NumeroTelefonico = usuarioPersonal.NumeroTelefonico;
  this.Cedula = usuarioPersonal.Cedula;
  this.FechaNacimiento = usuarioPersonal.FechaNacimiento;
};

UsuarioPersonal.crear = (nuevousuario, result) => {
  const request = sql.request();
  request.input("idTipoUsuario", nuevousuario.idTipoUsuario);
  request.input("Correo", nuevousuario.Correo);
  request.input("Contraseña", nuevousuario.Contraseña);
  request.input("Nombre", nuevousuario.Nombre);
  request.input("Direccion", nuevousuario.Direccion);
  request.input("NumeroTelefonico", nuevousuario.NumeroTelefonico);

  request.query(
    "Insert into Usuario(idTipoUsuario,Correo,Contraseña,Nombre,Direccion,NumeroTelefonico ) values(@idTipoUsuario, @Correo, @Contraseña, @Nombre, @Direccion, @NumeroTelefonico); SELECT SCOPE_IDENTITY() AS idUsuario;",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.dir(res.recordset[0].idUsuario);
      console.log("UsuarioPersonal creado: ", {
        idUsuario: res.recordset[0].idUsuario,
        ...nuevousuario,
      });
      result(null, {
        idUsuario: res.recordset[0].idUsuario,
        ...nuevousuario,
      });
    }
  );
};

UsuarioPersonal.getAll = (result) => {
  sql.query("Select * from UsuarioPersonal", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("usuarios: ", res.recordsets);
    result(null, res.recordsets);
  });
};

UsuarioPersonal.findById = (idUsuario, result) => {
  const request = sql.request();
  request.input("idUsuario", idUsuario);
  request.query(
    "Select * From UsuarioPersonal Where idUsuario = @idUsuario",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.rowsAffected != 0) {
        console.log("UsuarioPersonal encontrado: ", res.recordset);
        result(null, res.recordset);
        return;
      }

      result({ kind: "no encontrado" }, null);
    }
  );
};

module.exports = UsuarioPersonal;
