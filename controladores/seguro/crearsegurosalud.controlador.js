const CrearSeguroSalud = require("../../modelos/seguro/modelo.CrearSeguroSalud");
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
  var idPlan = null;
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

    if(req.body.Plan == "Gold"){
      idPlan = 1

    }else if(req.body.Plan == "Premium"){
      idPlan = 2

    }

    if(req.body.FechaPago != '')
    {
      FechaPago = req.body.FechaPago
    }

    if (req.body.FechaVencimiento != ''){
      FechaVencimiento = req.body.FechaVencimiento
    }

  const crearSeguroSalud = new CrearSeguroSalud({
    idAsegurador: idAsegurador,
    idUsuario: req.user.idUsuario,
    idTipoSeguro: req.body.idTipoSeguro,
    idMoneda: idMoneda,
    idTipoCliente: idTipoCliente,
    Poliza: req.body.Poliza,
    intermediario: req.body.Intermediario,
    precio: req.body.Precio,
    fechaPago: FechaPago,
    fechaVencido: FechaVencimiento,
    idPlan: idPlan,
    Parentesco: req.body.Parentesco,
  });

  CrearSeguroSalud.crear(crearSeguroSalud, (err, data) => {
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
