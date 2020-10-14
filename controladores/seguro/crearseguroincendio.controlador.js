const CrearSeguroIncendio = require("../../modelos/seguro/modelo.CrearSeguroIncendio");
const request = require('../../src/index').request()

exports.crear = async (req, res) => {
  if (!req.params) {
    res.status(400).send({
      message: "El contenido no puede estar vacio!",
    });
  }
  var idMoneda = null;
  var idAsegurador = null;
  var idTipoCliente = null;


    console.log(req.body.Moneda)
    console.log(req.body.Asegurador)
    console.log(req.body.TipoCliente)

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

  const crearSeguroIncendio = new CrearSeguroIncendio({
    idAsegurador: idAsegurador,
    idUsuario: req.user.idUsuario,
    idTipoSeguro: 4,
    idMoneda: idMoneda,
    idTipoCliente: idTipoCliente,
    Poliza: req.body.Poliza,
    intermediario: req.body.Intermediario,
    precio: req.body.Precio,
    fechaPago: req.body.FechaPago,
    fechaVencido: req.body.FechaVencimiento,
    TipoIncendio: req.body.TipoIncendio,
    });

  console.log("Seguro creado: ", crearSeguroIncendio)


CrearSeguroIncendio.crear(crearSeguroIncendio, (err, data) => {
  if (err) {
    res.status(500).send({
      message: err.message || "Ha ocurrido un error al crear el seguro.",
    });
  } 

  console.log("redirecting success...")
  res.redirect('/home')
  return;
 })





};
