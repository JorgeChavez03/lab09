const express = require('express');

const {dbconection}=require('./database/config');

require('dotenv').config();
const cors = require('cors');

//user	userChavez
//ctña	88YB95CyzJHnGIA6

//CODIGO PARA DESPLEGAR EL SERVIDOR
const app =express();
//const server = express();

app.use(cors());


//PRIMERA PETICION GET
app.get('/',(req,res)=>{
    res.json({
        ok:true,
        msg:'Desplegando el primer servidor REST'
    });
});

dbconection();

//console.log(process.env)

app.listen(process.env.PORT,()=>{
    console.log('El servidor se esta ejecutando en el puerto ' +process.env.PORT),
    console.log('Jorge Edson Chavez Bravo')
});
