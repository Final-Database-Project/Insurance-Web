const CrearSeguroVidaPersonal = require("../../modelos/seguro/modelo.CrearSeguroVidaPersonal");
// const CrearSeguroIncendio = require("../../modelos/seguro/modelo.CrearSeguroSalud");
// const CrearSeguro = require("../../modelos/seguro/modelo.CrearSeguroIncendio");

exports.crear = (req, res) => {
  if (!req.params) {
    res.status(400).send({
      message: "El contenido no puede estar vacio!",
    });
  }

  const crearSeguroVidaPersonal = new CrearSeguroVidaPersonal({
    idAsegurador: req.body.idAsegurador,
    idUsuario: req.body.idUsuario,
    idTipoSeguro: req.body.idTipoSeguro,
    idMoneda: req.body.idMoneda,
    idTipoCliente: req.body.idTipoCliente,
    Poliza: req.body.Poliza,
    intermediario: req.body.intermediario,
    precio: req.body.precio,
    fechaPago: req.body.fechaPago,
    fechaVencido: req.body.fechaVencido,
    Profesion: req.body.Profesion,
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
