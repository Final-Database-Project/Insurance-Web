const sql = require('../../src/index');
exports.getInfo = (result) =>{

    sql.query("Select * from Moneda; Select * from Asegurador; Select * from TipoCliente; Select * from Plann; Select * from TipoIncendio; Select * from Profesion; Select * from Modelo INNER JOIN Marca ON Modelo.idMarca = Marca.idMarca; Select * from TipoTransporte", (err, data) =>{
        if (err) {
            res.status(500).send({
              message: err.message || "Ha ocurrido un error al crear el seguro.",
            });
            result(err, null)
        }
        if(!data){
            result(null, null)
        }
        result(null, data.recordsets)
    })


}