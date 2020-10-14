const CrearSeguroTransporte = require("../../modelos/seguro/modelo.CrearSeguroTransporte");

exports.crear = (req, res) => {
  if (!req.params) {
    res.status(400).send({
      message: "El contenido no puede estar vacio!",
    });
  }
  var idMoneda = null;
  var idAsegurador = null;
  var idTipoCliente = null;
  var idTipoTransporte = null;
  var idModelo = null;
  var FechaPago = null;
  var FechaVencimiento = null;


    if(req.body.Moneda == "Peso Dominicano"){
      idMoneda = 1
      
    }else if(req.body.Moneda == "Dolar americano"){
      idMoneda = 2

    }else if(req.body.Moneda == "Euro"){
      idMoneda = 3
    }

    if(req.body.Asegurador == "Sura"){
      idAsegurador = 1

    }else if(req.body.Asegurador == "Colonial" ){
      idAsegurador = 2
      
    }else if(req.body.Asegurador = "BanReservas"){
      idAsegurador = 3
    }


    if(req.body.TipoCliente == "Nacional"){
      idTipoCliente = 1

    }else if(req.body.TipoCliente == "Internacional"){
      idTipoCliente = 2

    }

    if(req.body.TipoTransporte == "Automovil"){
      idTipoTransporte = 1

    }else if(req.body.TipoTransporte == "Camion"){
      idTipoTransporte = 2

    }

    if(req.body.Modelo == "MBZ Clase A, Mercedes Benz"){
      idModelo = 1

    }else if(req.body.Modelo == "MBZ AMG, Mercedes Benz"){
      idModelo = 2

    }else if(req.body.Modelo == "Camry, Toyota"){
      idModelo = 3

    }else if(req.body.Modelo == "Rav4, Toyota"){
      idModelo = 4

    }


    if(req.body.FechaPago != '')
    {
      FechaPago = req.body.FechaPago
    }

    if (req.body.FechaVencimiento != ''){
      FechaVencimiento = req.body.FechaVencimiento
    }

    

  const crearSeguroTransporte = new CrearSeguroTransporte({
    idAsegurador: idAsegurador,
    idUsuario: req.user.idUsuario,
    idMoneda: idMoneda,
    idTipoCliente: idTipoCliente,
    Poliza: req.body.Poliza,
    intermediario: req.body.Intermediario,
    precio: req.body.Precio,
    fechaPago: FechaPago,
    fechaVencido: FechaVencimiento,
    idModelo: idModelo,
    idTipoTransporte: idTipoTransporte,
    Matricula: req.body.Matricula,
    Año: req.body.Año,
  });

  console.log(idModelo)

  CrearSeguroTransporte.crear(crearSeguroTransporte, (err, data) => {
    if (err){
      res.status(500).send({
        messaage:
          err.message ||
          "Ha ocurrido un error al intentar crear al usuario personal",
      })
    }

    console.log("redirecting success...")
    res.redirect('/home')
    return;

  });


};
