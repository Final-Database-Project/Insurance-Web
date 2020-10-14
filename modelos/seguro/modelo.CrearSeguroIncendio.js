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
  this.TipoIncendio = crearseguroIncendio.TipoIncendio;
};

CrearSeguroIncendio.crear = (nuevoseguroincendio, result) => {
  const request = sql.request();
  request.input("TipoAsegurador", nuevoseguroincendio.idAsegurador);
  request.input("idUsuario", nuevoseguroincendio.idUsuario);
  request.input("moneda", nuevoseguroincendio.idMoneda);
  request.input("TipoCliente", nuevoseguroincendio.idTipoCliente);
  request.input("Poliza", nuevoseguroincendio.Poliza);
  request.input("intermediario", nuevoseguroincendio.intermediario);
  request.input("Precio", nuevoseguroincendio.precio);
  request.input("FechaPago", nuevoseguroincendio.fechaPago);
  request.input("FechaVencimiento", nuevoseguroincendio.fechaVencido);
  request.input("TipoIncendio", nuevoseguroincendio.TipoIncendio);
  request.execute("CrearSeguroIncendio", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }

    result(null, res)

  });
};

module.exports = CrearSeguroIncendio;
