const sql = require('../../src/index');
exports.getInfo = (result) =>{

    sql.query("Select * from Moneda; Select * from Asegurador;", (err, data) =>{
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