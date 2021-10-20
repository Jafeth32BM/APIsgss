const { response, request } = require("express");
const dbConn = require("../database/config");
const bcrypt = require("bcryptjs");
const { genJWT } = require("../helpers/jwt");
var dateTime = require("node-datetime");
const { parse } = require("dotenv");
var dt = dateTime.create();
var hoy = dt.format("Y-m-d H:M:S");
const nada = 0;

const getPendiente = async (req = request, res = response)=>{
    const noreg = req.header("noregistro");
    dbConn.query(
      `SELECT * FROM pendiente WHERE noregistro = '${noreg}'`,
      async (err, result) => {
        if (err) {
          return res.status(400).json({ ok: false, msg: err });
        }
        return res.status(201).json({
          ok: true,
          docalumn: result,
        });
      }
    );
}
const updatePendiente = async (req = request, res = response) => {
  const { noregistro, documento, estado } = req.body;
  dbConn.query(
    `UPDATE pendiente SET ${documento} = '${estado}' WHERE noregistro = '${noregistro}'`,
    async (err, result) => {
      if (err) {
        return res.status(400).json({ ok: false, msg: err });
      }
      return res.status(201).json({
        ok: true,
        msg: "Datos actualizados",
      });
    }
  );
};

module.exports = {getPendiente,updatePendiente};