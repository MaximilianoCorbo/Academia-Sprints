const express = require ("express");
const routes = express.Router();

const {tareas, modificarTarea, getByID, obtenerTareasPorUsuario, agregarTarea} = require("../controllers/tareas");

routes.get("/", tareas);

routes.get("/:id", getByID);

routes.get("/obtenerTareasPorUsuario/:id", obtenerTareasPorUsuario);

routes.put("/modificarTarea/:id", modificarTarea);

routes.post("/agregarTarea", agregarTarea);

module.exports = routes;