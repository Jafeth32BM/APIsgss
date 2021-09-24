const { response, request } = require("express");
const dbConn = require("../database/config");

const empresa = async (req = request, res = response) => {
    dbConn.query(
      "SELECT usuario.noregistro, usuario.apaterno, usuario.amaterno, usuario.nombres, escolar.carrera, empresa.empresa, empresa.direccion, empresa.municipio, empresa.sector, empresa.asesorext, empresa.puesto, empresa.horario, empresa.nomprograma, empresa.apoyoecon, empresa.monto FROM usuario LEFT JOIN empresa ON usuario.noregistro = empresa.noregistro LEFT JOIN escolar ON usuario.noregistro = escolar.noregistro ORDER BY usuario.noregistro",
      // "select * from usuario where 1=1",
      // `select * from empresa`,
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
          empresa: result
        });
      }
    );
  };
  
  module.exports = empresa;
  