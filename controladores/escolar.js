const { response, request } = require("express");
const dbConn = require("../database/config");

const escolar = async (req = request, res = response) => {
    dbConn.query(
      // "select * from usuario where 1=1",
      // `select * from escolar`,
      'SELECT usuario.noregistro, usuario.apaterno, usuario.amaterno, usuario.nombres, escolar.matricula, escolar.carrera, escolar.siss, escolar.pinicio, escolar.pfin, escolar.promedio, escolar.porcentaje FROM usuario LEFT JOIN escolar ON usuario.noregistro = escolar.noregistro ORDER BY usuario.noregistro;',
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
          escolar: result
        });
      }
    );
  };
  
  module.exports = escolar;
  