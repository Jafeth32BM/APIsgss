const { response, request } = require("express");
const dbConn = require("../database/config");

const regComentario = async (req = request, res = response) => {
    const {titulo, observacion, noregistro} = req.body;
    dbConn.query(
        `UPDATE comentario SET titulo ='${titulo}', observacion ='${observacion}' WHERE noregistro = '${noregistro}'`,
        async (error,result)=>{
            if (error) {
                return res.json({
                    ok:false,
                    error
                })
            }
            return res.json({
                ok:true,
                msg:'Comentario agregado',
            })
        }
    )
}

module.exports=regComentario;