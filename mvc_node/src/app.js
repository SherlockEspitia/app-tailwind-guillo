const express = require("express");
const app = express();
const {connectDB, sequelize} = require('./config/sequelizeConfig')

app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/usuarios",userRoutes)

sequelize.sync()
.then(()=>{
    connectDB().then(()=>{
        app.listen(3000, ()=>{
            console.log("Servidor corriendo en http://localhost:3000")
        })
    })
})
.catch(error=>{
    console.log('Error al sincronizar modelos o conectar la base de datos: ', error)
    process.exit(1)
})

/*app.listen(3000, ()=>{
    console.log("Servidor corriendo en http://localhost:3000");
})*/

