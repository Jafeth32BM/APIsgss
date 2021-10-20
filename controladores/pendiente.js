const { response, request } = require("express");
const dbConn = require("../database/config");

const pendiente = async (req = request, res = response) => {
    dbConn.query(
      // "select * from usuario where 1=1",
      'SELECT usuario.noregistro, usuario.apaterno, usuario.amaterno, usuario.nombres, escolar.carrera, pendiente.historial, pendiente.curp, pendiente.actnacim, pendiente.cargacadem, pendiente.conscredit, pendiente.solservsoci, pendiente.imss, pendiente.ruta FROM usuario INNER JOIN pendiente ON usuario.noregistro = pendiente.noregistro INNER JOIN escolar ON usuario.noregistro = escolar.noregistro ORDER BY usuario.noregistro',
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
  