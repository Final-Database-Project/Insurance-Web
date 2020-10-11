const sql = require("../../src/index");

const CrearSeguroVidaColectiva = function CrearSeguroVidaColectiva(crearSeguroVida){

    this.idAsegurador = crearSeguroVida.idAsegurador;
    this.idTipoSeguro = crearSeguroVida.idTipoSeguro;
    this.idMoneda = crearSeguroVida.idMoneda;
    this.idTipoCliente = crearSeguroVida.idTipoCliente;
    this.Poliza = crearSeguroVida.Poliza;
    this.intermediario = crearSeguroVida.intermediario;
    this.precio = crearSeguroVida.precio;
    this.fechaPago = crearSeguroVida.fechaPago;
    this.fechaVencido = crearSeguroVida.fechaVencido;
    this.EdadPromedio = crearSeguroVida.EdadPromedio;
    this.CantidadAsegurados = crearSeguroVida.CantidadAsegurados;
    

};

CrearSeguroVidaColectiva.crear = (nuevoseguroVida, result) =>{
    const request = sql.request();
  request.input("idAsegurador", nuevoseguroVida.idAsegurador);
  request.input("idTipoSeguro", nuevoseguroVida.idTipoCliente);
  request.input("idMoneda", nuevoseguroVida.idMoneda);
  request.input("TipoCliente", nuevoseguroVida.idTipoCliente);
  request.input("Poliza", nuevoseguroVida.Poliza);
  request.input("intermediario", nuevoseguroVida.intermediario);
  request.input("Precio", nuevoseguroVida.precio);
  request.input("FechaPago", nuevoseguroVida.fechaPago);
  request.input("FechaVencimiento", nuevoseguroVida.fechaVencido);
  request.input("EdadPromedio", nuevoseguroVida.EdadPromedio);
  request.input("CantidadAsegurados", nuevoseguroVida.CantidadAsegurados);
  request.execute("CrearSeguroVida", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }

    result(null, {
     
      ...nuevoseguroVida,
    });

    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
}

module.exports = CrearSeguroVidaColectiva;