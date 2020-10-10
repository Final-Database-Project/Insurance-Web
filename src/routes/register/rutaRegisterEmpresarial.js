module.exports = app =>{
	const aut = require('../../Checkautentification')
	
	app.get('/register/Empresarial', aut.checkNotAutehtnicated,  (req,res) => {
		res.sendFile('registerEmpresarial.html')	
	})
	
	app.post('/register/Empresarial', aut.checkNotAutehtnicated, (req,res) =>{
		
	})
	
}


