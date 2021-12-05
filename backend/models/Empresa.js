const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let empresaSchema = new Schema({
    nit:String,
    razon_social:String,
    direccion:String,
    telefono:String,
    representante_legal:String,
    email:String,
    clave:String
},{"versionKey":false});

module.exports = mongoose.model("Empresa", empresaSchema);