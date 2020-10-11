module.exports = app => {
    const passport = require('passport')
    const aut = require('../../Checkautentification')


    app.get("/home", aut.checkAuthenticated, (req, res) => {
        res.render('home.ejs', req)
    });
    
}