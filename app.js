const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
// CONEXION DB
const dbConn= require("./database/config");
// CAPTURA DATOS DEL FORMULARIO
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// RUTAS
app.use('/resources', express.static('public'));
app.use("/resources", express.static(__dirname + "/public"));
// CORS
app.use(cors());
// BCRYPT
const bcrypt = require("bcryptjs");
// SESSION
const session = require("express-session");
app.use(
  session({
    secret: "secreto",
    resave: true,
    saveUninitialized: true,
  })
);
// RUTAS
app.use('/', require('./routes/routes'));
// Manejar las demas rutas
/*app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'public/index.html'));
})*/
// Conexion al puerto
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log("Servidor corriendo en ", app.get("port"));
});
