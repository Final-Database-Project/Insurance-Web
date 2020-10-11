const UsuarioEmpresarial = require("../../../modelos/usuarios/modelo.UsuarioEmpresarial")

module.exports = app =>{
	const usuarioEmpresarial = require("../../../controladores/usuario/usuarioEmpresarial.controlador")
	const aut = require('../../Checkautentification')
	
	app.get('/register/Empresarial', aut.checkNotAutehtnicated,  (req,res) => {
		res.render('registerEmpresarial.ejs')
	})
	
	app.post('/register/Empresarial', aut.checkNotAutehtnicated, usuarioEmpresarial.crear)
	
}


