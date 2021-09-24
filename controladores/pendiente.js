const { response, request } = require("express");
const dbConn = require("../database/config");

const pendiente = async (req = request, res = response) => {
    dbConn.query(
      // "select * from usuario where 1=1",
      `select * from pendiente`,
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
          docs: result
        });
      }
    );
  };
  
  module.exports = pendiente;
  