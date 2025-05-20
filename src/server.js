// Requerir los módulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';


// Inicializaciones
const app = express()
dotenv.config()

// Configuraciones 
app.set('port', process.env.PORT || 3000)
app.use(cors()) // Siempre que se vea un .use es un middleware

// Middlewares 
app.use(express.json())


// Variables globales


// Rutas 
app.get('/',(req,res)=>{
    res.send("Server on")
})

// Exportar la instancia de express por medio de app
export default  app