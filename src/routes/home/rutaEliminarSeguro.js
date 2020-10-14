
module.exports = (app) => {
  const aut = require('../../Checkautentification')
  const home = require('../../../controladores/home/home.controlador')



  app.get('/Seguro/Eliminar/(:id)', aut.checkAuthenticated, (req, res) => {
    home.DeleteSeguro(req, res)
  })

  app.post('/Seguro/Editar/(:id)', aut.checkAuthenticated, (req, res) => {
    let idSeguro = req.params.id

    require.input("idSeguro", idSeguro)
    require.query("Select * from Seguro where idSeguro = @idSeguro", (err, data) =>{
        if(err) throw err

        console.log(data)
    })

})
};
