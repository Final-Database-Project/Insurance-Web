module.exports = app =>{

	const aut = require('../../Checkautentification')
	
	app.get('/register', aut.checkNotAutehtnicated, (req,res) => {
		res.render('register.ejs')	
	})
	
	
}

