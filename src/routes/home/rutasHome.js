module.exports = app => {
    const passport = require('passport')
    const aut = require('../../Checkautentification')
    const home = require('../../../controladores/home/home.controlador')
    var homedata;

<<<<<<< HEAD
    app.get("/Home", home.DeleteSeguro);
=======
    app.get("/home", aut.checkAuthenticated, (req,res) => {
        home.findByEmail(req.user.Correo, (err, home) =>{ 
            console.log(home)
            res.render('home.ejs', {data: { user: req.user, homedata: home}})
        });
        
    });

    
>>>>>>> 6919a90a806a615ec58983323be8db69d05f6666
}