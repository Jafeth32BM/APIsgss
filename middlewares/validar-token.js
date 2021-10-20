const { response, request } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = (req = request, res = response, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "Error en el token",
    });
  }
  try {
    const { noregistro, curp } = jwt.verify(token, process.env.SCRT_JWT_SEED);
    req.noregistro = noregistro;
    req.curp = curp;
    req.token = token;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }
  // Todo Bien
  next();
};

module.exports = validarJWT;
