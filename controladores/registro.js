const { React, useState, useEffect } = require("react");
const { response, request } = require("express");
const dbConn = require("../database/config");
const bcrypt = require("bcryptjs");
const { genJWT } = require("../helpers/jwt");
var dateTime = require("node-datetime");
const { parse } = require("dotenv");
var dt = dateTime.create();
var hoy = dt.format("Y-m-d H:M:S");
const nada = 0;
// REGISTRO DE ALUMNO
const regisAlum = async (req = request, res = response) => {
  const {
    noregistro,
    curp,
    matricula,
    contrasena,
    apaterno,
    amaterno,
    nombres,
    sexo,
    correo,
    tipo,
  } = req.body;
  let passHash = await bcrypt.hash(contrasena, 8);
  // SE CONSULTA SI YA ESTA REGISTRADO
  dbConn.query(
    "select * from usuario where curp = ?",
    [curp],
    async (err, resultRegistro) => {
      // REGISTRAR ALUMNO
      if (resultRegistro == 0 && tipo == "estudiante") {
        dbConn.query(
          "INSERT INTO usuario SET ?",
          {
            noregistro,
            curp,
            contrasena: passHash,
            apaterno,
            amaterno,
            nombres,
            sexo,
            correo,
            telefono: nada,
            tipo,
            fecharegistro: hoy,
          },
          async (err, resultadoReg) => {
            if (err) {
              return res.status(400).json({ ok: false, msg: err });
            }
            const token = await genJWT(req.body.noregistro, req.body.curp);
            // SI NO ESTA REGISTRADO SE INSERTA
            return res.status(201).json({
              ok: true,
              msg: "Alumno registrado en todas las tablas",
              noregistro,
              curp,
              contrasena,
              apaterno,
              amaterno,
              nombres,
              sexo,
              correo,
              tipo,
              token,
            });
          }
        );
        dbConn.query(
          "INSERT INTO empresa SET ?",
          {
            noregistro,
          },
          async (errEmpresa, resultEmpresa) => {
            if (errEmpresa) {
              return res.status(400).json({
                ok: false,
                msg: "No se pudo registrar en empresa",
              });
            }
          }
        );
        dbConn.query(
          "INSERT INTO escolar SET ?",
          {
            noregistro,
            matricula,
          },
          async (errEscolar, resultEscolar) => {
            if (errEscolar) {
              return res.status(400).json({
                ok: false,
                msg: "No se pudo registrar escolar",
              });
            }
          }
        );
        dbConn.query(
          "INSERT INTO pendiente SET ?",
          {
            noregistro,
          },
          async (errPendiente, resultPendiente) => {
            if (errPendiente) {
              return res.status(400).json({
                ok: false,
                msg: "No se pudo registrar pendiente",
              });
            }
          }
        );
        dbConn.query(
          "INSERT INTO logueo SET ?",
          {
            noregistro,
          },
          async (errLogueo, resultlogueo) => {
            if (errLogueo) {
              return res.status(400).json({
                ok: false,
                msg: "No se pudo registrar logueo",
              });
            }
          }
        );
        dbConn.query(
          "INSERT INTO comentario SET ?",
          {
            noregistro,
          },
          async (errComentario, resultComentario) => {
            if (errComentario) {
              return res.status(400).json({
                ok: false,
                msg: "No se pudo registrar en Comentario",
              });
            }
          }
        );
        // REGISTRAR ADMINISTRADOR
      } else if (resultRegistro == 0 && tipo == "admin") {
        dbConn.query(
          "INSERT INTO usuario set ?",
          {
            noregistro,
            curp,
            contrasena: passHash,
            apaterno,
            amaterno,
            nombres,
            sexo,
            correo,
            telefono: nada,
            tipo,
            fecharegistro: hoy,
          },
          async (errAdmin, resultAdmin) => {
            if (errAdmin) {
              return res.status(400).json({
                ok: false,
                mgs: "No se pudo registar al nuevo Administrador",
              });
            }
            const token = await genJWT(req.body.noregistro, req.body.curp);
            return res.status(201).json({
              ok: true,
              msg: "Administrador registrado",
              noregistro,
              curp,
              contrasena,
              apaterno,
              amaterno,
              nombres,
              sexo,
              correo,
              tipo,
              token,
            });
          }
        );
        dbConn.query(
          "INSERT INTO logueo SET ?",
          {
            noregistro,
          },
          async (errLogueo, resultlogueo) => {
            if (errLogueo) {
              return res.status(400).json({
                ok: false,
                msg: "No se pudo registrar logueo",
              });
            }
          }
        );
      } else {
        // SI ESTA REGISTRADO SE SALE
        return res.status(400).json({
          ok: false,
          msg: "Alumno ya registrado",
        });
      }
    }
  );
};

module.exports = { registro: regisAlum };
