const response  = require("express");
const Home = require("../../modelos/home/modelo.home");
const moment = require('moment')

exports.DeleteSeguro = (req, res) => {
	try{
		const home = new Home({
			idSeguro: req.params.id
		});

		Home.DeleteSeguro(home, (req,res))

		res.redirect('/home')
	}catch(e)
	{
		console.log(e)
	}

		
};


exports.findByEmail = (Correo, result) => {
	try{

		Home.findByEmail(Correo, (err, data) => {
			if (!data)
			{
				result(null, null)
				return
			}
			
			
			for (var i = 0; i < data.length; i++)
			{
				if (data[i].FechaVencimiento)
				data[i].FechaVencimiento = moment(data[i].FechaVencimiento).format('DD-MM-YYYY')
				if(data[i].FechaPago)
				data[i].FechaPago = moment(data[i].FechaPago).format('DD-MM-YYYY')
			}
			result(null,data)
		});
	}
	catch(e)
	{
		console.log(e)
	}
};
