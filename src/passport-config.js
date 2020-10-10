const authenticate  = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const Usuario = require('../controladores/usuario/usuario.controlador')
var usuario;
function initialize (passport){
    console.log('hey im in initialize')
    const authenticateuser = async (email, contraseña, done) =>{
        console.log('hey again im now in autenticateuser')
        Usuario.findByEmail(email, (err, user) =>{
            usuario = user
            if(!user){
                console.log("no user given");
                return done( null, false, {message: 'No existe un usuario con ese correo'})
            }
            bcrypt.compare(contraseña, user.Contraseña, (err, res) =>{
                    if(err){
                        throw err
                    }
                    if(res){
                        return done(null, user)
                    }else {
                        return done(null, false, {message: 'La contraseña es incorrecta'})
                    }
                    })
                })	

            }
    passport.use(new LocalStrategy({usernameField: 'Correo', passwordField: 'Contraseña'}, authenticateuser))
    passport.serializeUser((user, done) => {done(null, usuario.idUsuario)})
    passport.deserializeUser((id, done) => {
        Usuario.getUserById(id, (err, res) =>{
            done(null, res)
        })
        
    })
}

module.exports = initialize