const modo = "PROD";

module.exports = {
  urlDBMongo:
    modo === "DES"
      ? "mongodb://localhost/gmyd"
      : "mongodb+srv://dbclaro:Hgeminis2014+@claro-ep0fe.mongodb.net/claro",
  proveedor: "Claro",
  categoria: "Movil",
};
