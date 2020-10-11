const sql = require("../../src/index");

const CrearSeguroTransporte = function CrearSeguroTransporte(
  crearseguroTransporte
) {
  this.idAsegurador = crearseguroTransporte.idAsegurador;
  this.idTipoSeguro = crearseguroTransporte.idTipoSeguro;
  this.idMoneda = crearseguroTransporte.idMoneda;
  this.idTipoCliente = crearseguroTransporte.idTipoCliente;
  this.Poliza = crearseguroTransporte.Poliza;
  this.intermediario = crearseguroTransporte.intermediario;
  this.precio = crearseguroTransporte.precio;
  this.fechaPago = crearseguroTransporte.fechaPago;
  this.fechaVencido = crearseguroTransporte.fechaVencido;
  this.idMarca = crearseguroTransporte.idMarca;
  this.idTipoTransporte = crearseguroTransporte.idTipoTransporte;
  this.Matricula = crearseguroTransporte.Matricula;
  this.Año = crearseguroTransporte.Año;
};

CrearSeguroTransporte.crear = (nuevoseguroTransporte, result) => {
  const request = sql.request();
  request.input("idAsegurador", nuevoseguroTransporte.idAsegurador);
  request.input("idTipoSeguro", nuevoseguroTransporte.idTipoCliente);
  request.input("idMoneda", nuevoseguroTransporte.idMoneda);
  request.input("TipoCliente", nuevoseguroTransporte.idTipoCliente);
  request.input("Poliza", nuevoseguroTransporte.Poliza);
  request.input("intermediario", nuevoseguroTransporte.intermediario);
  request.input("Precio", nuevoseguroTransporte.precio);
  request.input("FechaPago", nuevoseguroTransporte.fechaPago);
  request.input("FechaVencimiento", nuevoseguroTransporte.fechaVencido);
  request.input("idMarca", nuevoseguroTransporte.idMarca);
  request.input("idTipoTransporte", nuevoseguroTransporte.idTipoTransporte);
  request.input("Matricula", nuevoseguroTransporte.Matricula);
  request.input("Año", nuevoseguroTransporte.Año);
  request.execute("CrearSeguroTransporte", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }

    result(null, {
      ...nuevoseguroincendio,
    });

    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};
