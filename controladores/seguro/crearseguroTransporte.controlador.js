const CrearSeguroTransporte = require("../../modelos/seguro/modelo.CrearSeguroTransporte");

exports.crear = (req, res) => {
  if (!req.params) {
    res.status(400).send({
      message: "El contenido no puede estar vacio!",
    });
  }

  const crearSeguroTransporte = new CrearSeguroTransporte({
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
    idMarca: req.query.idMarca,
    idTipoTransporte: req.query.idTipoTransporte,
    Matricula: req.query.Matricula,
    Año: req.query.Año,
  });

  CrearSeguroTransporte.crear(crearSeguroTransporte, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear el seguro.",
      });
    } //else res.send(data);
  });
};
