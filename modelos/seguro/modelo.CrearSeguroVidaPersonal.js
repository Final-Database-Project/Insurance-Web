const sql = require("../../src/index");

const CrearSeguroVidaPersonal = function CrearSeguroVidaPersonal(
  crearseguroVidaPersonal
) {
  this.idAsegurador = crearseguroVidaPersonal.idAsegurador;
  this.idUsuario = crearseguroVidaPersonal.idUsuario;
  this.idTipoSeguro = crearseguroVidaPersonal.idTipoSeguro;
  this.idMoneda = crearseguroVidaPersonal.idMoneda;
  this.idTipoCliente = crearseguroVidaPersonal.idTipoCliente;
  this.Poliza = crearseguroVidaPersonal.Poliza;
  this.intermediario = crearseguroVidaPersonal.intermediario;
  this.precio = crearseguroVidaPersonal.precio;
  this.fechaPago = crearseguroVidaPersonal.fechaPago;
  this.fechaVencido = crearseguroVidaPersonal.fechaVencido;
  this.idProfesion = crearseguroVidaPersonal.idProfesion;
  this.RazonCompra = crearseguroVidaPersonal.RazonCompra;
};

CrearSeguroVidaPersonal.crear = (nuevoseguroVidaPersonal, result) => {
  const request = sql.request();
  request.input("idAsegurador", nuevoseguroVidaPersonal.idAsegurador);
  request.input("idUsuario", nuevoseguroVidaPersonal.idUsuario);
  request.input("idMoneda", nuevoseguroVidaPersonal.idMoneda);
  request.input("idTipoCliente", nuevoseguroVidaPersonal.idTipoCliente);
  request.input("Poliza", nuevoseguroVidaPersonal.Poliza);
  request.input("intermediario", nuevoseguroVidaPersonal.intermediario);
  request.input("Precio", nuevoseguroVidaPersonal.precio);
  request.input("FechaPago", nuevoseguroVidaPersonal.fechaPago);
  request.input("FechaVencimiento", nuevoseguroVidaPersonal.fechaVencido);
  request.input("idProfesion", nuevoseguroVidaPersonal.idProfesion);
  request.input("RazonCompra",nuevoseguroVidaPersonal.RazonCompra);
  request.execute("CrearSeguroVidaPersonal", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }

    result(null, res)

  });
};

module.exports = CrearSeguroVidaPersonal;
