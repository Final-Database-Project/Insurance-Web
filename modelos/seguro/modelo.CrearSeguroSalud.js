const sql = require("../../src/index");

const CrearSeguroSalud = function CrearSeguroSalud(crearSeguroSalud) {
  this.idAsegurador = crearSeguroSalud.idAsegurador;
  this.idUsuario = crearseguroTransporte.idUsuario;
  this.idMoneda = crearSeguroSalud.idMoneda;
  this.idTipoCliente = crearSeguroSalud.idTipoCliente;
  this.Poliza = crearSeguroSalud.Poliza;
  this.intermediario = crearSeguroSalud.intermediario;
  this.precio = crearSeguroSalud.precio;
  this.fechaPago = crearSeguroSalud.fechaPago;
  this.fechaVencido = crearSeguroSalud.fechaVencido;
  this.idPlan = crearSeguroSalud.idPlan;
  this.Parentesco = crearSeguroSalud.Parentesco;
};

CrearSeguroSalud.crear = (nuevoseguroSalud, result) => {
  const request = sql.request();
  request.input("idAsegurador", nuevoseguroSalud.idAsegurador);
  request.input("idUsuario", nuevoseguroSalud.idUsuario);
  request.input("idMoneda", nuevoseguroSalud.idMoneda);
  request.input("TipoCliente", nuevoseguroSalud.idTipoCliente);
  request.input("Poliza", nuevoseguroSalud.Poliza);
  request.input("intermediario", nuevoseguroSalud.intermediario);
  request.input("Precio", nuevoseguroSalud.precio);
  request.input("FechaPago", nuevoseguroSalud.fechaPago);
  request.input("FechaVencimiento", nuevoseguroSalud.fechaVencido);
  request.input("idPlan", nuevoseguroSalud.idPlan);
  request.input("Parentesco", nuevoseguroSalud.Parentesco);
  request.execute("CrearSeguroSalud", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return
    }

    result(null, res)
    return

  });
};

module.exports = CrearSeguroSalud;
