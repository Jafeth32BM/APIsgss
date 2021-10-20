const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const { validar } = require("../middlewares/validar-campos");
const validarJWT = require("../middlewares/validar-token");
const login = require("../controladores/login");
const { registro } = require("../controladores/registro");
const pendiente = require("../controladores/pendiente");
const usuario = require("../controladores/usuarios");
const escolar = require("../controladores/escolar");
const empresa = require("../controladores/empresa");
const regEmpresa = require("../controladores/regEmpresa");
const regDocs = require("../controladores/regDocumentos");
const comentario = require("../controladores/comentarios");
const regComentario = require("../controladores/regComentario");
const nuevoToken = require("../controladores/newtoken");
const upAlumn = require("../usuario/update-alumn");
const {getPendiente, updatePendiente} = require("../usuario/getUpdate-pendiente");
const { updateEscolar, getEscolar } = require("../usuario/getUpd-escolar");
/*
POST: Renviar datos/registros
GET: Consultas de Datos
PUT: actualizar
*/

// VALIDAR TOKEN
router.get("/revalid", validarJWT, nuevoToken);
// LOGIN
router.post(
  "/",
  [
    check("correo", "Es obligatorio el corero").isEmail(),
    check("contrasena", "Contraseña nimina de 8").isLength({ min: 8 }),
  ],
  login
);
// REGISTRO
router.post(
  "/registro",
  [
    check("noregistro", "Es necesario el ID del alumno").isLength({ min: 10 }),
    check("curp", "Es obligatorio el curp").isLength({ min: 5 }),
    check("contrasena", "Es obligatorio la contraseña").isLength({ min: 8 }),
    check("apaterno", "Es obligatorio el A. Paterno").isLength({ min: 2 }),
    check("amaterno", "Es obligatorio el A. Materno").isLength({ min: 2 }),
    check("nombres", "Es obligatorio nombre(s)").isLength({ min: 2 }),
    check("sexo", "Es obligatorio el sexo del alumno").isLength({ min: 2 }),
    check("correo", "Es obligatorio el correo institucional").isEmail(),
    check("tipo", "Se necesita saber si es alumno o administrador").isLength({
      min: 2,
    }),
    validar,
  ],
  registro
);
//REGISTRO empresa
router.put(
  "/regEmpresa",
  [
    check("empresa", "Ingresa el nombre de la empresa").isLength({ min: 5 }),
    check("direccion", "Ingresa la direccion de la empresa").isLength({
      min: 8,
    }),
    check(
      "municipio",
      "Ingresa el municipio donde se ubica la empresa"
    ).isLength({ min: 2 }),
    check("sector", "Elige el sector al que pertenece").isLength({ min: 2 }),
    check("asesorext", "Ingresa el nombre del asesor externo").isLength({
      min: 2,
    }),
    check("puesto", "Ingresa el puesto del asesor externo").isLength({
      min: 2,
    }),
    check("horario", "Ingresa el horario").isLength({ min: 2 }),
    check("nomprograma", "Selecciona el nombre del programa ").isLength({
      min: 2,
    }),
    check("apoyoecon", "Selecciona si o no"),
    validar,
  ],
  validarJWT,
  regEmpresa
);
//  REGISTRO COMENTARIO
router.post("/regComent", regComentario);
//  REGISTRAR DOCUMENTOS
router.put("/regDocumento", validarJWT, regDocs);
/*===ACTUALIZAR DATOS===*/
router.put("/actAlum", upAlumn);
router.put("/actPend",updatePendiente);
router.put("/actEsc",updateEscolar);

/*===DATOS ALUMNO===*/
router.get("/alumnodoc", getPendiente);
router.get("/datoesco", getEscolar);
/*===ELIMINAR DATOS===*/
// router.delete("/delUser", delUsuario);
// router.delete("/delDoc", delDocumento);
// router.delete("/delAdmin", delAdministrador);
// router.delete("/delComen", delComentario);

/*===MOSTRAR DATOS DE LAS TABLAS===*/
// USUARIOS
router.get("/usuario", usuario);
// DOCUMENTOS
router.get("/documentos", pendiente);
// ESCOLAR
router.get("/escolar", escolar);
// EMPRESA
router.get("/empresa", empresa);
// COMENTARIOS
router.get("/comentarios", comentario);

module.exports = router;
