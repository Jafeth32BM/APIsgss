const { response, request } = require("express");
const dbConn = require("../database/config");
const { parse } = require("dotenv");
const bcrypt = require("bcryptjs");
const { genJWT } = require("../helpers/jwt");
var dateTime = require("node-datetime");
var dt = dateTime.create();
var hoy = dt.format("Y-m-d H:M:S");
const nada = 0;

//* LOGIN DE USUARIO
const login = async (req = request, res = response) => {
  const { correo, contrasena } = req.body;
  dbConn.query(
    // "select * from usuario where 1=1",
    // `select * from usuario`,
    `select * from usuario where correo = '${correo}'`,
    async (err, result) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          error: err,
        });
      } else if (result.length == 0) {
        return res.status(400).json({
          ok: false,
          msg: "Correo no encontrado, Asista al depto de servicio social",
        });
      }
      //   VALIDAR PASS HASHEADA
      const validPass = await bcrypt.compare(contrasena, result[0].contrasena);
      if (!validPass) {
        return res.status(400).json({
          ok: false,
          msg: "Contraseña incorrecta",
        });
      }
      //   GENERAR JsonWebToken ===JWT===
      const token = await genJWT(result[0].noregistro, result[0].curp);
      return res.json({
        ok: true,
        token,
        usuario: result,
        // noregistro: result[0].noregistro,
        // curp: result[0].curp,
        // contrasena: result[0].contrasena,
        // nuevacontra: result[0].nuevacontra,
        // apaterno: result[0].apaterno,
        // amaterno: result[0].amaterno,
        // nombres: result[0].nombres,
        // sexo: result[0].sexo,
        // correo: result[0].correo,
        // telefono: result[0].telefono,
        // tipo: result[0].tipo,
        // fecharegistro: result[0].fecharegistro,
      });
    }
  );
};

module.exports = login;
