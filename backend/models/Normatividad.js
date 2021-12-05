const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let normatividadSchema = new Schema({
    "normatividad":String,
     "lista_requisitos": [{ numero_requisito: Number, descripcion: String }]

},{"versionKey":false});

module.exports = mongoose.model("Normatividad", normatividadSchema);