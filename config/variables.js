const modo = "DES";

module.exports = {
  urlDBMongo:
    modo === "DES"
      ? "mongodb://localhost/gmyd"
      : "mongodb+srv://[base]:[password]@claro-ep0fe.mongodb.net/claro",
  proveedor: "Telefonica",
  categoria: "Movil",
};
