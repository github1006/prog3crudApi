var mysql = require('mysql');

//Establecemo los parametros de conexion
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_articulos'
});
//Probamos la conexion
conexion.connect(function (error){
    if (error){
        throw error;
    }else{
        console.log('Conexion a base de datos exitosa')
    }
});
module.exports = conexion;