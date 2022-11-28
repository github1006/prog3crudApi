//NOTA para iniciar servidor:sudo netstat -nap | grep :5000

const express = require('express');
const app = express();


app.set('view engine','ejs');
//paso 74
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//ruta raiz
/* app.get('/', (req,res)=>{
    res.send('Ruta raiz Nodemon');
}); */
app.use('/', require('./ruta'));


app.listen(5000, ()=>{
    console.log('Servidor corriendo en puerto 5000');
});