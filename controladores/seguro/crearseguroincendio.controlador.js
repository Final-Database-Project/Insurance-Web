const CrearSeguroIncendio = require("../../modelos/seguro/modelo.CrearSeguroIncendio");
// const CrearSeguro = require("../../modelos/seguro/modelo.CrearSeguroIncendio");

exports.crear = (req, res) => {
  if (!req.params) {
    res.status(400).send({
      message: "El contenido no puede estar vacio!",
    });
  }

  const crearSeguroIncendio = new CrearSeguroIncendio({
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
    TipoIncendio: req.query.TipoIncendio,
  });

  CrearSeguroIncendio.crear(crearSeguroIncendio, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear el seguro.",
      });
    } //else res.send(data);
  });
};
