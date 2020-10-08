const sql = require("../../src/index");



const CrearSeguro = function CrearSeguro(crearSeguro) {
  this.idAsegurador = crearSeguro.idAsegurador;
  this.idTipoSeguro = crearSeguro.idTipoSeguro;
  this.idMoneda = crearSeguro.idMoneda;
  this.idTipoCliente = crearSeguro.idTipoCliente;
  this.Poliza = crearSeguro.Poliza;
  this.intermediario = crearSeguro.intermediario;
  this.precio = crearSeguro.precio;
  this.fechaPago = crearSeguro.fechaPago;
  this.fechaVencido = crearSeguro.fechaVencido;
};

CrearSeguro.crear = (nuevoseguro, result) => {
  const request = sql.request();
  request.input("idAsegurador", nuevoseguro.idAsegurador);
  request.input("idTipoSeguro", nuevoseguro.idTipoCliente);
  request.input("idMoneda", nuevoseguro.idMoneda);
  request.input("TipoCliente", nuevoseguro.idTipoCliente);
  request.input("Poliza", nuevoseguro.Poliza);
  request.input("intermediario", nuevoseguro.intermediario);
  request.input("Precio", nuevoseguro.precio);
  request.input("FechaPago", nuevoseguro.fechaPago);
  request.input("FechaVencimiento", nuevoseguro.fechaVencido);
  request.execute("CrearSeguro", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }

    result(null, {
     
      ...nuevoseguro,
    });

    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

module.exports = CrearSeguro;
