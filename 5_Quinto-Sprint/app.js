// import express from 'express' en react, es lo mismo que:
const express = require("express");
const app = express();
app.use(express.json());
//Asignamos un puerto
const port = 3001;

const {getAllUser} = require("./controllers/usuarios");
const tareasRouter = require("./routes/tareas");
const {object, string, number} = require ("yup");

// app.get('/', (req, res) =>{
//     const usuarios = getAllUser();
//     res.json(usuarios)
// });

app.use("/api", tareasRouter)

app.listen(port, () => {
    //Devuelve mensaje que informa que el puerto funciona.
    console.log(`App listening on port ${port}`);
});

module.exports = app