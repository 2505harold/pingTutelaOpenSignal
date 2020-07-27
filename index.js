require("./database");
const ping = require("ping");
const schedule = require("node-schedule");
const IpsAmazon = require("./models/prefix-amazon");
const IpsTutela = require("./models/prefix-tutela");
const IpsOpenSignal = require("./models/prefix-opensignal");
const PingAmazon = require("./models/ping-amazon");
const PingTutela = require("./models/ping-tutela");
const PingOpenSignal = require("./models/ping-opensignal");
const { proveedor, categoria } = require("./config/variables");

//job cada 1 minutos

//schedule.scheduleJob("*/15 * * * *", function (fireDate) {
  let fecha = new Date().toLocaleString("es-PE", {
    timeZone: "America/Lima",
  });

  //fecha.setHours(fecha.getHours() - 5);
  // IpsAmazon.find({}).exec((err, ipsamazon) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     ipsamazon.forEach((item) => {
  //       const ip = item.ip_prefix.substr(0, item.ip_prefix.indexOf("/"));
  //       obtenerDelay(ip).then((resp) => {
  //         let delay = new PingAmazon({
  //           min: resp.min,
  //           max: resp.max,
  //           avg: resp.avg,
  //           stdev: resp.stdev,
  //           packetloss: resp.packetloss,
  //           host: resp.host,
  //           alive: resp.alive,
  //           prefijo: item._id,
  //           operador: proveedor,
  //           categoria: categoria,
  //           fecha: fecha,
  //         });
  //         delay.save();
  //       });
  //     });
  //   }
  // });

  IpsTutela.find({}).exec((err, ipstutela) => {
    if (err) {
      console.log(err);
    } else {
      ipstutela.forEach((item) => {
        const ip = item.ip;
        obtenerDelay(ip).then((resp) => {
          let delay = new PingTutela({
            min: resp.min,
            max: resp.max,
            avg: resp.avg,
            stdev: resp.stdev,
            packetloss: resp.packetloss,
            host: resp.host,
            alive: resp.alive,
            operador: proveedor,
            tipo: item.tipo,
            categoria: categoria,
            fecha: fecha,
          });

          delay.save();
        });
      });
    }
  });

  IpsOpenSignal.find({}).exec((err, resultado) => {
    if (err) {
      console.log(err);
    } else {
      resultado.forEach((item) => {
        const ip = item.ip;
        obtenerDelay(ip).then((resp) => {
          let delay = new PingOpenSignal({
            min: resp.min,
            max: resp.max,
            avg: resp.avg,
            stdev: resp.stdev,
            packetloss: resp.packetloss,
            host: resp.host,
            alive: resp.alive,
            operador: proveedor,
            tipo: item.tipo,
            categoria: categoria,
            fecha: fecha,
          });

          delay.save();
        });
      });
    }
  });
//});

function obtenerDelay(ipdns) {
  return new Promise((resolve, reject) => {
    ping.promise
      .probe(ipdns.trim())
      .then(function (resp) {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
