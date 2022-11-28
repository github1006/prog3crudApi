const express = require('express');
const router = express.Router();

//PASO 31
router.get('/inicio',(req,res)=>{
    //res.render('index',{nombre:'Tomas', apellido:'Alvarez'}); 
    conexion.query('SELECT * FROM tb_articulos', (error,query)=>{
        if(error){
            throw error;
        }else{
            res.render('index',{query:query});
        }
    })
});
// Ruta crear regitros
router.get('/create',(req,res)=>{
    res.render('create');
})
//81. Creamos la ruta para editar registros, dentro de la ruta creamos un query para seleccionar solo
//el archivo con el id a modificar:
//RUTA PARA EDITAR REGISTROS
router.get('/edit/:id',(req,res)=>{
    conexion.query('SELECT * FROM tb_articulos WHERE id = ?', [req.params.id],(error, query)=>{
        if (error){
            throw error;
        }else{
            res.render('edit',{articulo:query[0]});
        }
    })
});

router.get('/contacto',(req, res)=>{
    res.send('CONTACTO');
});



const conexion = require('./modelo/db');



// Ruta para mostrar todos los Articulos
router.get('/articulos',(req,res)=>{
    conexion.query('SELECT * FROM tb_articulos',(error,query)=>{
        if(error){
            throw error;
        }else{
            res.send(query);
        }
    })
});


const crud =require('./controlador/crud');
router.post('/save', crud.save);

//89. En el archivo rutas.js creamos la ruta update de protocolo POST:
router.post('/update', crud.update);

module.exports = router;

