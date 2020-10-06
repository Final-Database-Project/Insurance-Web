"use strict";

const server = require("./server");

const startServer = async () =>{
    try{
        const config ={
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

              

              
        }

        const app = await server(config);
        await app.start();

        console.log(`Server running at http://${ config.server}:{config.port}`)





    }
    catch(err){
        console.log("startup error", err)
    }
}

startServer();