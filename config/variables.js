const modo = "DES";

module.exports = {
  urlDBMongo:
    modo === "DES"
      ? "mongodb://localhost/gmyd"
      : "mongodb+srv://[basededatos]:[password]@claro-ep0fe.mongodb.net/claro",
  proveedor: "Telefonica",
  categoria: "Movil",
};
