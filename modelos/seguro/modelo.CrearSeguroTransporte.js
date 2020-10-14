const sql = require("../../src/index");

const CrearSeguroTransporte = function CrearSeguroTransporte(
  crearseguroTransporte
) {
  this.idAsegurador = crearseguroTransporte.idAsegurador;
  this.idUsuario = crearseguroTransporte.idUsuario;
  this.idTipoSeguro = crearseguroTransporte.idTipoSeguro;
  this.idMoneda = crearseguroTransporte.idMoneda;
  this.idTipoCliente = crearseguroTransporte.idTipoCliente;
  this.Poliza = crearseguroTransporte.Poliza;
  this.intermediario = crearseguroTransporte.intermediario;
  this.precio = crearseguroTransporte.precio;
  this.fechaPago = crearseguroTransporte.fechaPago;
  this.fechaVencido = crearseguroTransporte.fechaVencido;
  this.idModelo = crearseguroTransporte.idModelo;
  this.idTipoTransporte = crearseguroTransporte.idTipoTransporte;
  this.Matricula = crearseguroTransporte.Matricula;
  this.Año = crearseguroTransporte.Año;
};

CrearSeguroTransporte.crear = (nuevoseguroTransporte, result) => {
  const request = sql.request();
  request.input("TipoAsegurador", nuevoseguroTransporte.idAsegurador);
  request.input("idUsuario", nuevoseguroTransporte.idUsuario);
  request.input("TipoSeguro", nuevoseguroTransporte.idTipoCliente);
  request.input("moneda", nuevoseguroTransporte.idMoneda);
  request.input("TipoCliente", nuevoseguroTransporte.idTipoCliente);
  request.input("Poliza", nuevoseguroTransporte.Poliza);
  request.input("Intermediario", nuevoseguroTransporte.intermediario);
  request.input("Precio", nuevoseguroTransporte.precio);
  request.input("FechaPago", nuevoseguroTransporte.fechaPago);
  request.input("FechaVencimiento", nuevoseguroTransporte.fechaVencido);
  request.input("idModelo", nuevoseguroTransporte.idModelo);
  request.input("idTipoTransporte", nuevoseguroTransporte.idTipoTransporte);
  request.input("Matricula", nuevoseguroTransporte.Matricula);
  request.input("Año", nuevoseguroTransporte.Año);
  request.execute("CrearSeguroMedioTransporte", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }

    result(null, {
      ...nuevoseguroTransporte,
    });

    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

module.exports = CrearSeguroTransporte;
