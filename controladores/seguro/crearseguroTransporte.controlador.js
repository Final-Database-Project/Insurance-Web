const CrearSeguroTransporte = require("../../modelos/seguro/modelo.CrearSeguroTransporte");

exports.crear = (req, res) => {
  if (!req.params) {
    res.status(400).send({
      message: "El contenido no puede estar vacio!",
    });
  }

  const crearSeguroTransporte = new CrearSeguroTransporte({
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
    idMarca: req.body.idMarca,
    idTipoTransporte: req.body.idTipoTransporte,
    Matricula: req.body.Matricula,
    Año: req.body.Año,
  });

  CrearSeguroTransporte.crear(crearSeguroTransporte, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear el seguro.",
      });
    } //else res.send(data);
  });
};
