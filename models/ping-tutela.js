const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pingSchema = new Schema(
  {
    min: { type: String },
    max: { type: String },
    avg: { type: String },
    stdev: { type: String },
    packetloss: { type: String },
    host: { type: String },
    alive: { type: Boolean },
    fecha: { type: String },
    tipo: { type: String },
    categoria: { type: String },
    operador: { type: String },
  },
  { collection: "ping_tutela_prueba" }
);

module.exports = mongoose.model("PingTutelaPrueba", pingSchema);
