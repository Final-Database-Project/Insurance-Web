

module.exports.checkAuthenticated = function checkAuthenticated (req, res, next) {
	if(req.isAuthenticated()){
		return next()
	}
	return res.redirect('/login')
}


module.exports.checkNotAutehtnicated = function checkNotAutehtnicated(req, res,next){
	if(req.isAuthenticated()){
		return res.redirect('/')
	}

	next()
}

