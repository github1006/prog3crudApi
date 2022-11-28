const conexion=require('../modelo/db');
exports.save=(req,res)=>{
var descripcion= req.body.descripcion;
var precio=req.body.precio;
var cantidad= req.body.cantidad;

   /*  console.log(descripcion);
    console.log(precio);
    console.log(cantidad); */
    
   let sql ="INSERT INTO tb_articulos (`descripcion`,`precio`, `cantidad`)VALUES(?,?,?);";
    conexion.query(sql,[descripcion,precio,cantidad],function(error,results){
        if(error){
            throw error;
        }else{
            res.redirect('/inicio');
        }
    });
}
//88. En el controlador, archivo crud.js adicionamos el código del query UPDATE capturando los datos
//modificados para su posterior registro en la BD.

exports.update=(req,res)=>{
    let id = req.body.id;
    let descripcion= req.body.descripcion;
    let precio=req.body.precio;
    let cantidad=req.body.cantidad;

    let sql = "UPDATE tb_articulos SET descripcion = ?, precio = ?, cantidad = ? WHERE id = ?";
    conexion.query(sql,[descripcion,precio,cantidad,id], function(error, results){
        if (error){
            throw error;
        }else{
            res.redirect('/inicio');
        }
    });
}