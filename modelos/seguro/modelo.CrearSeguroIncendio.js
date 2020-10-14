const sql = require("../../src/index");

const CrearSeguroIncendio = function CrearSeguroIncendio(crearseguroIncendio) {
  this.idAsegurador = crearseguroIncendio.idAsegurador;
  this.idUsuario = crearseguroIncendio.idUsuario;
  this.idMoneda = crearseguroIncendio.idMoneda;
  this.idTipoCliente = crearseguroIncendio.idTipoCliente;
  this.Poliza = crearseguroIncendio.Poliza;
  this.intermediario = crearseguroIncendio.intermediario;
  this.precio = crearseguroIncendio.precio;
  this.fechaPago = crearseguroIncendio.fechaPago;
  this.fechaVencido = crearseguroIncendio.fechaVencido;
  this.idTipoIncendio = crearseguroIncendio.idTipoIncendio;
};

CrearSeguroIncendio.crear = (nuevoseguroincendio, result) => {
  const request = sql.request();
  request.input("idAsegurador", nuevoseguroincendio.idAsegurador);
  request.input("idUsuario", nuevoseguroincendio.idUsuario);
  request.input("idMoneda", nuevoseguroincendio.idMoneda);
  request.input("idTipoCliente", nuevoseguroincendio.idTipoCliente);
  request.input("Poliza", nuevoseguroincendio.Poliza);
  request.input("intermediario", nuevoseguroincendio.intermediario);
  request.input("Precio", nuevoseguroincendio.precio);
  request.input("FechaPago", nuevoseguroincendio.fechaPago);
  request.input("FechaVencimiento", nuevoseguroincendio.fechaVencido);
  request.input("idTipoIncendio", nuevoseguroincendio.idTipoIncendio);
  request.execute("CrearSeguroIncendio", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }

    result(null, res)

  });
};

module.exports = CrearSeguroIncendio;
