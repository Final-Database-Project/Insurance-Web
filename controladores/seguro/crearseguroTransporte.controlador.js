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

  const crearSeguroTransporte = new CrearSeguroTransporte({
    idAsegurador: idAsegurador,
    idUsuario: req.user.idUsuario,
    idMoneda: idMoneda,
    idTipoCliente: idTipoCliente,
    Poliza: req.body.Poliza,
    intermediario: req.body.intermediario,
    precio: req.body.precio,
    fechaPago: req.body.fechaPago,
    fechaVencido: req.body.fechaVencido,
    idModelo: req.body.idModelo,
    idTipoTransporte: req.body.idTipoTransporte,
    Matricula: req.body.Matricula,
    Año: req.body.Año,
  });

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
