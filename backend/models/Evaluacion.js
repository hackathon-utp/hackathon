const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let evaluacionSchema = new Schema({
    normatividad:String,
    lista_requisitos: [{ numero_requisito: Number, descripcion: String, autoevaluacion:Boolean,auditoria:Boolean }],
    observaciones:String,
    id_empresa:String

},{"versionKey":false});

module.exports = mongoose.model("Evaluacion", evaluacionSchema);