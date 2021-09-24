const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const login = require("../controladores/login");
const {registro} = require("../controladores/registro");
const pendiente = require("../controladores/pendiente");
const usuario = require("../controladores/usuarios");
const escolar = require("../controladores/escolar");
const empresa = require("../controladores/empresa");
const {validar} = require("../middlewares/validar-campos");
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
    "/registro"
    , [
    check("noregistro", 'Es necesario el ID del alumno').isLength({min: 10}),
    check("curp", 'Es obligatorio el curp').isLength({min: 5}),
    check("contrasena", 'Es obligatorio la contraseña').isLength({min: 8}),
    check("apaterno", 'Es obligatorio el A. Paterno').isLength({min: 2}),
    check("amaterno", 'Es obligatorio el A. Materno').isLength({min: 2}),
    check("nombres", 'Es obligatorio nombre(s)').isLength({min: 2}),
    check("sexo", 'Es obligatorio el sexo del alumno').isLength({min: 2}),
    check("correo", 'Es obligatorio el correo institucional').isEmail(),
    check("tipo", 'Se necesita saber si es alumno o administrador').isLength({min: 2}),
    validar,
],
    registro
);
/*===MOSTRAR DATOS DE LAS TABLAS===*/
// USUARIOS
router.get("/usuarios", usuario);
// DOCUMENTOS
router.get("/documentos", pendiente);
// ESCOLAR
router.get("/escolar", escolar);
// EMPRESA
router.get("/empresa", empresa);
module.exports = router;
