// console.log('texto de prueba')
// console.log('texto de pruebasssss')

const express = require('express');
const conectarBaseDeDatos = require('./config/db')
const cors = require ('cors')


const aplicacion = express();  
conectarBaseDeDatos()

aplicacion.use(cors());
aplicacion.use(express.json());


aplicacion.use(cors());


aplicacion.use('/api', require('./routes/proyectorutas'))
aplicacion.listen(4000,()=>{
    console.log("El servidor se ejecuta en el puerto 4000")
})

