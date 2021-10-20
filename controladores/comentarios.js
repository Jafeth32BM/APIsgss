const { response, request } = require("express");
const dbConn = require("../database/config");

const comentario = async (req = request, res = response) => {
    dbConn.query(
      // "select * from usuario where 1=1",
      // `select * from comentario`,
      'SELECT usuario.noregistro, usuario.apaterno, usuario.amaterno, usuario.nombres, escolar.matricula, escolar.carrera, comentario.titulo, comentario.observacion FROM usuario INNER JOIN comentario ON usuario.noregistro = comentario.noregistro INNER JOIN escolar ON usuario.noregistro = escolar.noregistro ORDER BY usuario.noregistro;',
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
          comentario: result
        });
      }
    );
  };
  
  module.exports = comentario;
  