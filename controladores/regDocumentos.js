const { response, request } = require("express");
const dbConn = require("../database/config");
const bcrypt = require("bcryptjs");
const { genJWT } = require("../helpers/jwt");
var dateTime = require("node-datetime");
const { parse } = require("dotenv");
var dt = dateTime.create();

const regDocs = async (req= request, res = response)=>{
    const {noregistro, token} = req;
    const {doc, ruta} = req.body;

    dbConn.query(
        "select * from pendiente where noregistro =?",
         [noregistro] , //funciona
        // `select * from empresa where noregistro = '${noregistro}'`, //funciona
        async (err, result) => {
          console.log(result[0].ruta)
          if(err){
            return res.json({
              ok: false,
              msg: "Fallo de conexion",
              err: err,
            });
          }
          // SI NO TIENE RUTA ASIGNADA SE LE ASIGNA
          if (result[0].ruta == ''){
            dbConn.query(
              `UPDATE pendiente SET  ${doc} = cargado, ruta = '${ruta}' WHERE noregistro = '${noregistro}'`,
              async (errUpdate, resultUpdate)=>{
                if (errUpdate) {
                  return res.json({
                    ok: false,
                    msg: "Hubo un error al actualizar",
                    err: err,
                  });
                }
                // Mensaje de actualizacion
                return res.json({
                  ok: true,
                  msg: 'Datos actualizados! ! !',
                  noregistro,
                  ruta,
                  token,
                })
              }
              )
          }else if(result[0].ruta == ruta){
            dbConn.query(
              `UPDATE pendiente SET  ${doc} = cargado  WHERE noregistro = '${noregistro}'`,
              async (errUpdate, resultUpdate)=>{
                if (errUpdate) {
                  return res.json({
                    ok: false,
                    msg: "Hubo un error al actualizar",
                    err: err,
                  });
                }
                // Mensaje de actualizacion
                return res.json({
                  ok: true,
                  msg: 'Datos actualizados ! ! !',
                  noregistro,
                  ruta,
                  token,
                })
              }
              )    
          } else{
            res.json({
              ok: false,
              msg: 'No se encontro la ruta de carpeta',
            })
          }
        }
      );
}

module.exports = regDocs;