const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "grupo9", // update me
      password: "mesa9basededato." // update me
    },
    type: "default"
  },
  server: "finalprojectdb1.database.windows.net", // update me
  options: {
    database: "Final Project DB - 1", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

module.exports = connection;


connection.on("connect", err => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected")
    }
  });

