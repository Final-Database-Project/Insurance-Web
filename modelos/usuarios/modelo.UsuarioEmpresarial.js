const sql = require("../../src/index");

const UsuarioEmpresarial = function UsuarioEmpresarial(usuarioEmpresarial) {
  this.Correo = usuarioEmpresarial.Correo;
  this.Contraseña = usuarioEmpresarial.Contraseña;
  this.Nombre = usuarioEmpresarial.Nombre;
  this.Direccion = usuarioEmpresarial.Direccion;
  this.NumeroTelefonico = usuarioEmpresarial.NumeroTelefonico;
  this.RNC = usuarioEmpresarial.RNC;
};

UsuarioEmpresarial.crear = (nuevousuario, result) => {
  const request = sql.request();
  request.input("Correo", nuevousuario.Correo);
  request.input("Contraseña", nuevousuario.Contraseña);
  request.input("Nombre", nuevousuario.Nombre);
  request.input("Direccion", nuevousuario.Direccion);
  request.input("NumeroTelefonico", nuevousuario.NumeroTelefonico);
  request.input("RNC", nuevousuario.RNC);
  request.execute("CrearUsuarioEmpresarial", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    request.query(
      "SELECT IDENT_CURRENT('Usuario') As idUsuario; SELECT IDENT_CURRENT('UsuarioEmpresarial') As idUsuarioEmpresarial",
      (error, resp) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        console.log("UsuarioEmpresarial creado: ", {
          idUsuario: resp.recordsets[0][0].idUsuario,
          ...nuevousuario,
          idUsuarioEmpresarial: resp.recordsets[1][0].idUsuarioEmpresarial,
        });
        result(null, {
          idUsuario: resp.recordsets[0][0].idUsuario,
          ...nuevousuario,
          idUsuarioEmpresarial: resp.recordsets[1][0].idUsuarioEmpresarial,
        });
      }
    );
  });
};

UsuarioEmpresarial.getAll = (result) => {
  sql.query(
    "Select U.*, idUsuarioEmpresarial, RNC from UsuarioEmpresarial UE Inner Join Usuario U on UE.idUsuario = U.idUsuario ",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("usuarios: ", res.recordsets);
      result(null, res.recordsets);
    }
  );
};

UsuarioEmpresarial.findById = (idUsuarioEmpresarial, result) => {
  const request = sql.request();
  request.input("idUsuarioEmpresarial", idUsuarioEmpresarial);
  request.query(
    "Select * From UsuarioEmpresarial where idUsuarioEmpresarial = @idUsuarioEmpresarial",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.rowsAffected != 0) {
        console.log("UsuarioEmpresarial encontrado: ", res.recordset);
        result(null, res.recordset);
        return;
      }

      result({ kind: "no encontrado" }, null);
    }
  );
};

module.exports = UsuarioEmpresarial;
