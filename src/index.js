const sql = require("mssql");

// Create connection to database
const config = {
	user: "CHANGED", // update me
	password: "CHANGED.", // update me
	server: "CHANGED", // update me
	database: "CHANGED", //update me
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
