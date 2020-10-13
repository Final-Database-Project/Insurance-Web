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
    idAsegurador: req.query.idAsegurador,
    idUsuario: req.query.idUsuario,
    idTipoSeguro: req.query.idTipoSeguro,
    idMoneda: req.query.idMoneda,
    idTipoCliente: req.query.idTipoCliente,
    Poliza: req.query.Poliza,
    intermediario: req.query.intermediario,
    precio: req.query.precio,
    fechaPago: req.query.fechaPago,
    fechaVencido: req.query.fechaVencido,
    Profesion: req.query.Profesion,
    RazonCompra: req.query.RazonCompra,
  });

  CrearSeguroVidaPersonal.crear(crearSeguroVidaPersonal, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear el seguro.",
      });
    } //else res.send(data);
  });
};