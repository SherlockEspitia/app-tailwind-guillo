const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("Bienvenido a mi aplicacion");
})

app.get('/acerca',(req, res)=>{
    res.send("Pagina de informacion sobre mi aplicacion");
});
app.listen(3000, ()=>{
    console.log("Servidor corriendo en http://localhost:3000");
})