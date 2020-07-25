const mongoose = require("mongoose");
const { urlDBMongo } = require("./config/variables");

mongoose
  .connect(urlDBMongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => {
    console.log("database mongo connect");
  });
