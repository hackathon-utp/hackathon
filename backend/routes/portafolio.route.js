const express = require("express");
const portafolioRoute = express.Router();
const  tokenSecret =require("../services/token");
const jwt = require("jwt-simple");
const lodash = require("lodash");


// portafolio model
let portafolioModel = require("../models/Portafolio");
//const Portafolio = require("../models/Portafolio");

//********* */ consulta todos los portafolios *******+
portafolioRoute.route("/").get((req, res) => {
  portafolioModel.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

//********* */ consulta todos los portafolios *******+
portafolioRoute.route("/portafolios-autorizados").get((req, res) => {
  portafolioModel.find({estado:"AUTORIZADO"},(error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

// consulata todos los portafolios por id del usuario

portafolioRoute.route("/portafolio_idUsuario").get( (req, res) => {
  console.log(`authorization:${req.headers.authorization}`);
  if(req.headers.authorization==null){
    console.log('Error de consulta por portafolios de usuarios');
    return res.status(403).send({mensaje:"sin autorización"});
      }
      const token =req.headers.authorization.split(' ')[1];
      console.log(`mi filtro:${token}`);
      const payload =jwt.decode(token, tokenSecret.clave);
      let filtro={usuario_id:payload.sub};
      /* let nombre={nombre:payload.nombre};
      console.log(`mi nombre:${nombre.nombre}`) */

  portafolioModel.find(filtro, (error, data, next) => {
    if (error) {
      return next(error);
    } else {
      
      /* let datos=lodash.assign(data, nombre);
      console.log(`mis datos:${datos}`); */
      res.json(data);
    }
  });
});

portafolioRoute.route("/create-portafolio").post((req, res, next) => {
  if(req.headers.authorization==null){
    console.log('Error al crear  portafolios de usuarios');
    return res.status(403).send({mensaje:"sin autorización"});
      }
      const token =req.headers.authorization.split(' ')[1];
      const payload =jwt.decode(token, tokenSecret.clave);
      let usuario={usuario_id:payload.sub};
      let datos=lodash.assign(usuario, req.body);
      console.log(`datos unificado:${datos}` );

  portafolioModel.create(datos, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

/************************************************/
portafolioRoute.route("/edit-portafolio/:id").get((req, res) => {
  portafolioModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update portafolio
portafolioRoute.route("/update-portafolio/:id").put((req, res, next) => {
  portafolioModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("portafolio successfully updated!");
      }
    }
  );
});


// Delete portafolio
portafolioRoute.route("/delete-portafolio/:id").delete((req, res, next) => {
  portafolioModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = portafolioRoute;
