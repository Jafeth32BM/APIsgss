const { response, request } = require("express");
const dbConn = require("../database/config");

const usuario = async (req = request, res = response) => {
    dbConn.query(
      // "select * from usuario where 1=1",
      `select * from usuario`,
    //   `select * from usuario where correo = '${correo}'`,
      async (err, result) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            error: err,
          });
        }
        return res.json({
          ok: true,
          usuario: result
        });
      }
    );
  };
  
  module.exports = usuario;
  