//const express = require("express");
import express from "express";
//const express =require("cors")
import cors from "cors";
import { dbConnection } from "../database/config.js";
import persona from "../routes/persona.js"

class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.port=process.env.PORT;
    this.connectarBd()
    this.routes()
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.static('public'))
  } 

  async connectarBd(){
    await dbConnection()
  }

  routes(){
    this.app.use( "/api/persona"   ,  persona   )
  }

  escuchar() {
    this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en el puerto ${this.port}`);
    });
  }
}

export default Server
