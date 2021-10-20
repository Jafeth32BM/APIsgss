const { response, request } = require("express");
const dbConn = require("../database/config");
const bcrypt = require("bcryptjs");
const { genJWT } = require("../helpers/jwt");
var dateTime = require("node-datetime");
const { parse } = require("dotenv");
var dt = dateTime.create();
var hoy = dt.format("Y-m-d H:M:S");
const nada = 0;
const regEmpresa = async (req = request, res = response) => {
  const { noregistro, token } = req;
  const {
    empresa,
    direccion,
    municipio,
    sector,
    asesorext,
    puesto,
    horario,
    nomprograma,
    apoyoecon,
    monto,
    estimulo,
  } = req.body;
  dbConn.query(
    `UPDATE empresa SET  empresa = '${empresa}', direccion = '${direccion}', municipio = '${municipio}', sector = '${sector}', asesorext = '${asesorext}', puesto = '${puesto}', horario = '${horario}', nomprograma = '${nomprograma}', apoyoecon = '${apoyoecon}', monto = '${monto}', estimulo = '${estimulo}' WHERE noregistro = '${noregistro}'`,
    async (errUpdate, resultUpdate) => {
      if (errUpdate) {
        return res.json({
          ok: false,
          mgs: "Hubo un error al actualizar",
          err: errUpdate,
        });
      }
      return res.json({
        ok: true,
        msg: "Datos actualizados ! ! !",
        noregistro,
        token,
      });
    }
  );
};
module.exports = regEmpresa;
