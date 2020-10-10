module.exports = app =>{
	const usuarioPersonal = require("../../../controladores/usuario/usuarioPersonal.controlador");
	const cors = require('cors')
	const aut = require('../../Checkautentification')
	
	app.get('/register/Personal', aut.checkNotAutehtnicated, (req,res) => {
		res.render('registerPersonal.ejs')	
	})
	
	app.post('/register/Personal', aut.checkNotAutehtnicated, usuarioPersonal.crear)
	
}


