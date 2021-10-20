const { response, request } = require("express");
const dbConn = require("../database/config");
const bcrypt = require("bcryptjs");
const { genJWT } = require("../helpers/jwt");
const { parse } = require("dotenv");

const nuevoToken = async (req = request, res = response) => {
    const { noregistro } = req;
    // Leer db para obtener email
    dbConn.query(
      `select * from usuario where noregistro = '${noregistro}'`,
      async (err, result) => {
        if (err) {
          return res.json({
            ok: false,
            msg: "Error del controlador",
            err: err,
          });
        }
        const token = await genJWT(noregistro, result[0].curp);
        return res.json({
          ok: true,
          noregistro: result[0].noregistro,
          curp: result[0].curp,
          contrasena: result[0].contrasena,
          nuevacontra: result[0].nuevacontra,
          apaterno: result[0].apaterno,
          amaterno: result[0].amaterno,
          nombres: result[0].nombres,
          sexo: result[0].sexo,
          correo: result[0].correo,
          telefono: result[0].telefono,
          tipo: result[0].tipo,
          fecharegistro: result[0].fecharegistro,
          token,
        });
      }
    );
  };

  module.exports = nuevoToken;