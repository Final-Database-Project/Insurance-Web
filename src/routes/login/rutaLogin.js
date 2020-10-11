module.exports = app =>{
    const passport = require('passport')
    const aut = require('../../Checkautentification')

    
    
    app.get('/login', aut.checkNotAutehtnicated,(req,res) =>{
        res.render('login.ejs')
    
    })
    
    app.post('/login', aut.checkNotAutehtnicated, passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/login',
        failureFlash: true
    }))


    
}