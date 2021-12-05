const express = require("express");
const evaluacionRoute = express.Router();
let normatividadModel = require("../models/Normatividad");
let evaluacionModel = require("../models/Evaluacion");
require('dotenv').config({path:"./.env"});
const jwt = require("jwt-simple");
const lodash = require("lodash");

// **************creacion normatividad *************************
evaluacionRoute.route("/crear-normatividad").post((req, res, next) => {
    let datos =req.body;
    
    normatividadModel.create(datos, (error, data) => {
      if (error) {
        res.status(401).send({mensaje:"error al crear normatividad"});
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });
// **************consultar normatividad *************************
  evaluacionRoute.route("/consultar-normatividad").post((req, res, next) => {
    var filtro ={normatividad:req.body.normatividad};
    
     normatividadModel.findOne(filtro,
        (error, data) => {
          if (error) {
            console.log(error);
            res.status(401).send({mensaje:"error al consultar normatividad"});
          } else {
            console.log(data);
            res.status(200).send({data:data});
            }
        }
      );
      });
    
  //******************lista de requisitos************************ */
  
evaluacionRoute.route("/requisitos").get((req, res) => {
  evaluacionModel.find((error, data, next) => {
    if (error) {
      res.status(401).send({mensaje:"error al consultar normatividad"});
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

// **************consultar normatividad *************************
  evaluacionRoute.route("/consultar-normatividad").post((req, res, next) => {
    var filtro ={normatividad:req.body.normatividad};
    
     normatividadModel.findOne(filtro,
        (error, data) => {
          if (error) {
            console.log(error);
            res.status(401).send({mensaje:"error al consultar normatividad"});
          } else {
            console.log(data);
            res.status(200).send({data:data});
            }
        }
      );
      });
    //**********consulta general con filtro evaluaciones */
    evaluacionRoute.route("/filtro-evaluaciones").post((req, res, next) => {
      var filtro =req.body.filtro;
      
       evaluacionModel.find(filtro,
          (error, data) => {
            if (error) {
              console.log(error);
              res.status(401).send({mensaje:"error al consultar evaluaciones"});
            } else {
              console.log(data);
              res.status(200).send({data:data});
              }
          }
        );
        });
      // **************creacion evaluacion *************************
    evaluacionRoute.route("/crear-evaluacion").post((req, res) => {
        if(req.headers.authorization==null){
          console.log('Error al crear  evaluacion');
          return res.status(403).send({mensaje:"sin autorización"});
            }
            const token =req.headers.authorization.split(' ')[1];
            const clave_secreta=process.env.CLAVE;
            const payload =jwt.decode(token, clave_secreta);
            let usuario={id_empresa:payload.sub};
            let datos=lodash.assign(usuario, req.body);
            console.log(`datos unificado:${datos}` );
      
        evaluacionModel.create(datos, (error, data) => {
          if (error) {
            res.status(401).send({mensaje:"error al crear evaluación"});
          } else {
            console.log(data);
            res.json(data);
          }
        });
      });
/***********consultar evaluacion por id evaluacion*/
evaluacionRoute.route("/consultar-evaluacion/:id").get((req, res) => {
  evaluacionModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      res.status(401).send({mensaje:"error al consultar evaluacion"});
    } else {
      res.json(data);
    }
  });
});
/**************consultar evaluaciones por id cliente */
evaluacionRoute.route("/consultar-idEmpresa").get( (req, res) => {
  console.log(`authorization:${req.headers.authorization}`);
  if(req.headers.authorization==null){
    console.log('Error de consulta evaluaciones empresa');
    return res.status(403).send({mensaje:"sin autorización"});
      }
      const token =req.headers.authorization.split(' ')[1];
      const clave_secreta=process.env.CLAVE;
      console.log(`mi filtro:${token}`);
      const payload =jwt.decode(token, clave_secreta);
      let filtro={id_empresa:payload.sub};
      
  evaluacionModel.find(filtro, (error, data, next) => {
    if (error) {
      res.status(401).send({mensaje:"error al consultar evaluaciones"});
    } else {
         res.json(data);
    }
  });
});

// **************consultar todas las evaluaciones *************************
evaluacionRoute.route("/").get((req, res) => {
  evaluacionModel.find((error, data, next) => {
    if (error) {
      res.status(401).send({mensaje:"error al consultar evaluaciones"});
    } else {
      console.log(error);
      res.json(data);
    }
  });
});
// actualizacion evaluacion
evaluacionRoute.route("/actualizar-evaluacion/:id").put((req, res, next) => {
  evaluacionModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        res.status(401).send({mensaje:"no es posible actualizar la evaluación"});
      } else {
        res.json(data);
        
      }
    }
  );
});

  module.exports = evaluacionRoute;