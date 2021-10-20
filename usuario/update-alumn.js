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

const upAlumn = async (req = request, res = response) => {
  const { noregistro, genero, correo, telefono } = req.body;
  dbConn.query(
    `UPDATE usuario SET sexo = '${genero}', correo ='${correo}', telefono = '${telefono}' WHERE noregistro = '${noregistro}'`,
    async (err, result) => {
      if (err) {
        return res.status(400).json({ ok: false, msg: err });
      }
      return res.status(201).json({
        ok: true,
        msg: "Datos actualizados",
      });
    }
  );
};

module.exports = upAlumn;
