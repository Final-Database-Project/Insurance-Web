const CrearSeguro = require("../../modelos/usuarios/modelos/seguro/modelo.CrearSeguro");

exports.crear = (req, res) => {
  if (!req.params) {
    res.status(400).send({
      message: "El contenido no puede estar vacio!",
    });
  }

  const crearSeguro = new CrearSeguro({
    idAsegurador: req.query.idAsegurador,
    idTipoSeguro: req.query.idTipoSeguro,
    idMoneda: req.query.idMoneda,
    idTipoCliente: req.query.idTipoCliente,
    Poliza: req.query.Poliza,
    intermediario: req.query.intermediario,
    precio: req.query.precio,
    fechaPago: req.query.fechaPago,
    fechaVencido: req.query.fechaVencido,
  });

  CrearSeguro.crear(crearSeguro, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear el seguro.",
      });
    } else res.send(data);
  });
};
