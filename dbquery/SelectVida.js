SelectVida = `SELECT Precio, FechaPago, FechaVencimiento FROM Seguro INNER JOIN Asegurador ON Seguro.idAsegurador = Asegurador.idAsegurador INNER JOIN USUARIO_Asegurador ON Asegurador.idAsegurador = Usuario_Asegurador.idAsegurador INNER JOIN Usuario ON Usuario_Asegurador.idUsuario = Usuario.idUsuario WHERE (idTipoSeguro = ? AND id = ?)`

module.exports = SelectVida;