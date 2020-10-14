const { request } = require('../../index');


module.exports = (app) => {
  const aut = require('../../Checkautentification')
  const home = require('../../../controladores/home/home.controlador')
  const sql = require('../../index')
  const infoseguro = require('../../../controladores/seguro/infoseguro.comtrolador')
  const moment = require('moment')



  app.get('/Seguro/Eliminar/(:id)', aut.checkAuthenticated, (req, res) => {
    home.DeleteSeguro(req, res)
  })

  app.get('/Seguro/Editar/(:id)', aut.checkAuthenticated, (req, res) => {
    const require = sql.request()
    let idSeguro = req.params.id

    require.input("idSeguro", idSeguro)
    if(req.user.idTipoUsuario == 1){
    require.execute("SP_Select_Info_Seguro_By_id_Personal", (err, data) =>{
        if(err) throw err 

        console.log("Data Personal: ", data.recordset[0])
        infoseguro.getInfo((err, information) =>{


          if (data.recordset[0].FechaVencimiento)
          data.recordset[0].FechaVencimiento = moment(data.recordset[0].FechaVencimiento).format('YYYY-MM-DD')
          if(data.recordset[0].FechaPago)
          data.recordset[0].FechaPago = moment(data.recordset[0].FechaPago).format('YYYY-MM-DD')

          res.render('edit.ejs', {user: req.user, seguro: data.recordset[0], info: information})
        })

    })
  }
  else if(req.user.idTipoUsuario == 2){
    require.execute("SP_Select_Info_Seguro_By_Empresarial", (err, data) =>{
      if(err) throw err 
      infoseguro.getInfo((err, information) =>{

            if (data.recordset[0].FechaVencimiento)
            data.recordset[0].FechaVencimiento = moment(data.recordset[0].FechaVencimiento).format('YYYY-MM-DD')
            if(data.recordset[0].FechaPago)
            data.recordset[0].FechaPago = moment(data.recordset[0].FechaPago).format('YYYY-MM-DD')

        res.render('edit.ejs', {user: req.user, seguro: data.recordset[0], info: information})
      })
  })

  }

})

app.post('/Seguro/Editar/(:id)', aut.checkAuthenticated, (req, res)=>{
  const require = sql.request()
  let idSeguro = req.params.id

  require.input("idSeguro", idSeguro)
  if(req.user.idTipoUsuario == 1){
  require.execute("SP_Select_Info_Seguro_By_id_Personal", (err, data) =>{
      if(err) throw err 
      const seguro = data.recordset[0]
      var idMoneda = null;
      var idAsegurador = null;
      var idTipoCliente = null;
      var FechaPago = null;
      var FechaVencimiento = null;
    
        if(req.body.Moneda == "Peso Dominicano"){
          idMoneda = 1
          
        }else if(req.body.Moneda == "Dolar americano"){
          idMoneda = 2
    
        }else if(req.body.Moneda == "Euro"){
          idMoneda = 3
        }
    
        if(req.body.Asegurador == "Sura"){
          idAsegurador = 1
    
        }else if(req.body.Asegurador == "Colonial" ){
          idAsegurador = 2
          
        }else if(req.body.Asegurador = "BanReservas"){
          idAsegurador = 3
        }
    
    
        if(req.body.TipoCliente == "Nacional"){
          idTipoCliente = 1
    
        }else if(req.body.TipoCliente == "Internacional"){
          idTipoCliente = 2
    
        }
    

        if(req.body.FechaPago != '')
        {
          FechaPago = req.body.FechaPago
        }
    
        if (req.body.FechaVencimiento != ''){
          FechaVencimiento = req.body.FechaVencimiento
        }
    
    
    
      require.input("idAsegurador", idAsegurador)
      require.input("idMoneda", idMoneda)
      require.input("idTipoCliente", idTipoCliente)
      require.input("Poliza", req.body.Poliza)
      require.input("intermediario", req.body.Intermediario)
      require.input("Precio", req.body.Precio)
      require.input("FechaPago", FechaPago)
      require.input("FechaVencimiento", FechaVencimiento)
      
      require.query("Update Seguro set idAsegurador = @idAsegurador, idMoneda = @idMoneda, TipoCliente = @idTipoCliente, Poliza = @Poliza, intermediario = @intermediario, Precio = @Precio, FechaPago = @FechaPago, FechaVencimiento = @FechaVencimiento where idSeguro = @idSeguro")
      
      if(seguro.NombreTipoSeguro == "Vida"){
        var idProfesion = null;
        if (seguro.NombreProfesion == "Carpintero"){
          idProfesion = 1
        }else if (seguro.NombreProfesion == "Ingeniero"){
          idProfesion = 2
        } else if (seguro.NombreProfesion == "Negociante"){
          idProfesion = 3
        }
        require.query("Update Vida Set RazonCompra = @RazonCompra, idProfesion = @idProfesion")


      }else if(seguro.NombreTipoSeguro == "Salud"){

        var idPlan = null;
        if(req.body.Plan == "Gold"){
          idPlan = 1
    
        }else if(req.body.Plan == "Premium"){
          idPlan = 2
        }
        require.input("idPlan", idPlan)
        require.input("Parentesco", req.body.Parentesco)
        require.query("Update Salud Set idPlan = @idPlan, Parentesco = @Parentesco")

      }else if(seguro.NombreTipoSeguro == "Medio Transporte"){
        var idTipoTransporte = null;
        var idModelo = null;
  
        if(req.body.TipoTransporte == "Automovil"){
          idTipoTransporte = 1
    
        }else if(req.body.TipoTransporte == "Camion"){
          idTipoTransporte = 2
    
        }
    
        if(req.body.Modelo == "MBZ Clase A, Mercedes Benz"){
          idModelo = 1
    
        }else if(req.body.Modelo == "MBZ AMG, Mercedes Benz"){
          idModelo = 2
    
        }else if(req.body.Modelo == "Camry, Toyota"){
          idModelo = 3
    
        }else if(req.body.Modelo == "Rav4, Toyota"){
          idModelo = 4
    
        }
  
        require.input("idModelo", idModelo)
        require.input("idTipoTransporte", idTipoTransporte)
        require.input("Matriula", req.body.Matricula)
        require.input("Año", req.body.Año)
  
        require.query("Update MedioTransporte Set idModelo = @idModelo, idTipoTransporte = @idTipoTransporte, Matricula = @Matriula, Año = @Año where idSeguro = @idSeguro")

      }
      

  })
}
else if(req.user.idTipoUsuario == 2){
  require.execute("SP_Select_Info_Seguro_By_Empresarial", (err, data) =>{
    if(err) throw err 
    const seguro = data.recordset[0]
    var idMoneda = null;
    var idAsegurador = null;
    var idTipoCliente = null;
    var FechaPago = null;
    var FechaVencimiento = null;
  
      if(req.body.Moneda == "Peso Dominicano"){
        idMoneda = 1
        
      }else if(req.body.Moneda == "Dolar americano"){
        idMoneda = 2
  
      }else if(req.body.Moneda == "Euro"){
        idMoneda = 3
      }
  
      if(req.body.Asegurador == "Sura"){
        idAsegurador = 1
  
      }else if(req.body.Asegurador == "Colonial" ){
        idAsegurador = 2
        
      }else if(req.body.Asegurador = "BanReservas"){
        idAsegurador = 3
      }
  
  
      if(req.body.TipoCliente == "Nacional"){
        idTipoCliente = 1
  
      }else if(req.body.TipoCliente == "Internacional"){
        idTipoCliente = 2
  
      }
  

      if(req.body.FechaPago != '')
      {
        FechaPago = req.body.FechaPago
      }
  
      if (req.body.FechaVencimiento != ''){
        FechaVencimiento = req.body.FechaVencimiento
      }
  
  
  
    require.input("idAsegurador", idAsegurador)
    require.input("idMoneda", idMoneda)
    require.input("idTipoCliente", idTipoCliente)
    require.input("Poliza", req.body.Poliza)
    require.input("intermediario", req.body.Intermediario)
    require.input("Precio", req.body.Precio)
    require.input("FechaPago", FechaPago)
    require.input("FechaVencimiento", FechaVencimiento)
    
    require.query("Update Seguro set idAsegurador = @idAsegurador, idMoneda = @idMoneda, TipoCliente = @idTipoCliente, Poliza = @Poliza, intermediario = @intermediario, Precio = @Precio, FechaPago = @FechaPago, FechaVencimiento = @FechaVencimiento where idSeguro = @idSeguro")
    if(seguro.NombreTipoSeguro == "Vida Colectiva"){
      require.input("EdadPromedio", req.body.EdadPromedio)
      require.input("CantidadAsegurados", req.body.CantidadAsegurados)


      require.query("Update VidaColectiva set EdadPromedio = @EdadPromedio, CantidadAsegurados = @CantidadAsegurados where idSeguro = @idSeguro")

    }else if(seguro.NombreTipoSeguro == "Incendio"){
      var idTipoIncendio = null;
      if(req.body.TipoIncendio == "Materia Prima"){
        idTipoIncendio = 1
  
      }else if(req.body.TipoIncendio == "Edificio"){
        idTipoIncendio = 2
      }else if(req.body.TipoIncendio == "Casa"){
        idTipoIncendio = 3
  
      }else if(req.body.TipoIncendio == "Maquinaria"){
        idTipoIncendio = 4
      }

      require.input("idTipoIncendio", idTipoIncendio)

      require.query("Update Incendio set idTipoIncendio = @idTipoIncendio where idSeguro = @idSeguro")


    }else if(seguro.NombreTipoSeguro == "Medio Transporte"){
      var idTipoTransporte = null;
      var idModelo = null;

      if(req.body.TipoTransporte == "Automovil"){
        idTipoTransporte = 1
  
      }else if(req.body.TipoTransporte == "Camion"){
        idTipoTransporte = 2
  
      }
  
      if(req.body.Modelo == "MBZ Clase A, Mercedes Benz"){
        idModelo = 1
  
      }else if(req.body.Modelo == "MBZ AMG, Mercedes Benz"){
        idModelo = 2
  
      }else if(req.body.Modelo == "Camry, Toyota"){
        idModelo = 3
  
      }else if(req.body.Modelo == "Rav4, Toyota"){
        idModelo = 4
  
      }

      require.input("idModelo", idModelo)
      require.input("idTipoTransporte", idTipoTransporte)
      require.input("Matriula", req.body.Matricula)
      require.input("Año", req.body.Año)

      require.query("Update MedioTransporte Set idModelo = @idModelo, idTipoTransporte = @idTipoTransporte, Matricula = @Matriula, Año = @Año where idSeguro = @idSeguro")

    }
})

}

  res.redirect('/home')

})


};
