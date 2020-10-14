const CrearSeguroVidaPersonal = require("../../modelos/seguro/modelo.CrearSeguroVidaPersonal");
// const CrearSeguroIncendio = require("../../modelos/seguro/modelo.CrearSeguroSalud");
// const CrearSeguro = require("../../modelos/seguro/modelo.CrearSeguroIncendio");

exports.crear = (req, res) => {
  if (!req.params) {
    res.status(400).send({
      message: "El contenido no puede estar vacio!",
    });
  }

  var idMoneda = null;
  var idAsegurador = null;
  var idTipoCliente = null;
  var idProfesion = null;
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

    if(req.body.Profesion == "Carpintero"){
      idProfesion = 1

    }else if(req.body.Profesion == "Ingeniero"){
      idProfesion = 2

    }else if(req.body.Profesion == "Negociante"){
      idProfesion = 3

    }


    if(req.body.FechaPago != '')
    {
      FechaPago = req.body.FechaPago
    }

    if (req.body.FechaVencimiento != ''){
      FechaVencimiento = req.body.FechaVencimiento
    }

  

  const crearSeguroVidaPersonal = new CrearSeguroVidaPersonal({
    idAsegurador: idAsegurador,
    idUsuario: req.user.idUsuario,
    idMoneda: idMoneda,
    idTipoCliente: idTipoCliente,
    Poliza: req.body.Poliza,
    intermediario: req.body.Intermediario,
    precio: req.body.Precio,
    fechaPago: FechaPago,
    fechaVencido: FechaVencimiento,
    idProfesion: idProfesion,
    RazonCompra: req.body.RazonCompra,
  });


  CrearSeguroVidaPersonal.crear(crearSeguroVidaPersonal, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear el seguro.",
      });
    } 
    
    console.log("redirecting success...")
    res.redirect('/home')
    return;

  });
};
