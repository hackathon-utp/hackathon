const express = require("express");
const empresaRoute = express.Router();
const service = require("../services/index.js");
require('dotenv').config({path:"./.env"});
const jwt = require("jwt-simple");


// modelo usuario-empresa
let empresaModel = require("../models/Empresa");
// consulta todas las empresas
empresaRoute.route("/").get((req, res) => {
  empresaModel.find((error, data, next) => {
    if (error) {
        res.status(401).send({mensaje:"error consultar empresas"});
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

empresaRoute.route("/crear-empresa").post((req, res, next) => {
   empresaModel.create(req.body, (error, data) => {
    if (error) {
        res.status(401).send({mensaje:"error al crear empresa"});
    } else {
      console.log(data);
      res.status(200).send({data:data,
        token:service.createToken(data) });
    
      
    }
  }); 
  
});


empresaRoute.route("/sesion-usuario").post((req, res, next) => {
var filtro ={nit:req.body.nit, clave:req.body.clave};

 empresaModel.findOne(filtro,
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        console.log(data);
        if (data===null)
          res.status(200).send({data:data});
        else
        res.status(200).send({data:data,
          token:service.createToken(data) })
          
        
      }
    }
  );
});

module.exports = empresaRoute;
