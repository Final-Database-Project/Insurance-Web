const sql = require("mssql");

// Create connection to database
const config = {
	user: "grupo9", // update me
	password: "mesa9basededato.", // update me
	server: "finalprojectdb1.database.windows.net", // update me
	database: "FinalProjectDB-1", //update me
};

const connection = new sql.ConnectionPool(config);

connection.connect((err) => {
	if (err) {
		console.error(err.message);
	} else {
		console.log("Connected");
	}
});

module.exports = connection;
