const jwt= require("jwt-simple");
require('dotenv').config({path:"./.env"});

function createToken(usuario){
const payload = {
  sub:usuario._id,
  nombre:usuario.nombre,
  tipo_usuario:usuario.tipo_usuario
}
const token= process.env.CLAVE;
return jwt.encode(payload, token)
}

module.exports ={createToken}