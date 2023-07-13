import { useEffect, useState } from "react";
import "./App.css";
import sun from "./assets/images/icon-sun.svg";
import moon from "./assets/images/icon-moon.svg";
import check from "./assets/images/icon-check.svg";
import cross from "./assets/images/icon-cross.svg";

function App() {
  const [modo, setModo] = useState("light");
  const [girar, setGirar] = useState(false);

  const [lista, setLista] = useState([
    { id: 1, texto: "Tomar agua", active: true },
    { id: 2, texto: "Finalizar práctica de estados y props", active: false },
    { id: 3, texto: "Tomar agua", active: false },
    { id: 4, texto: "Compartir lo aprendido con algún compañero", active: false},
    { id: 5, texto: "Probar pizza italiana", active: false },
    { id: 6, texto: "Completar el desafío del sprint 3", active: false },
  ]);
  const [filtrados, setFiltrados] = useState(lista);

  function changeMode() {
    const modoActual = modo === "light" ? "dark" : "light";
    setModo(modoActual);
  }

  const handleClick = () => {
    changeMode();
    setGirar((prevGirar) => !prevGirar);
  };

  useEffect(() => {
    setFiltrados(lista);
  }, [lista]);

  const crearTarea = (textoIngresado) => {
    setLista([
      { id: Math.random(), texto: textoIngresado, active: true },
      ...lista,
    ]);
  };
  const cambiarEstadoTarea = (id) => {
    const indiceTarea = lista.findIndex((tarea) => id === tarea.id);
    const nuevoEstado = [...lista];
    nuevoEstado[indiceTarea].active = !nuevoEstado[indiceTarea].active;
    setLista(nuevoEstado);
  };
  const borrarTarea = (id) => {
    const nuevaLista = lista.filter((tarea) => tarea.id !== id);
    setLista(nuevaLista);
  };

  const handleFilterChange = (newFilter) => {
    let tareasFiltradas = [];

    switch (newFilter) {
      case "active":
        tareasFiltradas = lista.filter((tarea) => tarea.active);
        break;
      case "completed":
        tareasFiltradas = lista.filter((tarea) => !tarea.active);
        break;
      default:
        tareasFiltradas = lista;
        break;
    }

    setFiltrados(tareasFiltradas);
  };

  console.log(lista);

  const handleClearCompleted = () => {
    const nuevasTareas = lista.filter((tarea) => tarea.active);
    setLista(nuevasTareas);
  };

  return (
    <div className={`cuerpo ${modo === "dark" ? "dark" : ""}`}>
      <div className="contenedor">
        <div className="titulo">
          <span className="todo">TO DO</span>
          <button
            className={`interruptor ${girar ? "girar" : ""}`}
            onClick={handleClick}
          >
            <img src={modo === "light" ? sun : moon} alt="" />
          </button>
        </div>
        <div className={`busqueda ${modo === "dark" ? "dark" : ""}`}>
          <input
            onKeyDown={(event) => {
              if (event.keyCode === 13) crearTarea(event.target.value);
            }}
            className={`buscar ${modo === "dark" ? "dark" : ""}`}
            type="text"
            placeholder="Create a new To do"
          />
        </div>
        <ul className="tareas">
          {filtrados.map((item) => {
            return (
              <li className={`lista ${modo === "dark" ? "dark" : ""}`}>
                <button
                  onClick={() => cambiarEstadoTarea(item.id)}
                  className={`hecho ${item.active ? "" : "completed"} ${
                    modo === "dark" ? "dark" : ""
                  }`}
                >
                  <img src={check} alt="" />
                </button>
                <span className={item.active ? "" : "completed"}>
                  {item.texto}
                </span>
                <button onClick={() => borrarTarea(item.id)} className="borrar">
                  <img src={cross} alt="" />
                </button>
              </li>
            );
          })}
        </ul>
        <div className={`opciones ${modo === "dark" ? "dark" : ""}`}>
          <span>{lista.length} Left</span>
          <button
            className={`accion ${modo === "dark" ? "dark" : ""}`}
            // onClick={handleClearCompleted}
          >
            Clear Completed
          </button>
        </div>
        <div className={`cambiantes ${modo === "dark" ? "dark" : ""}`}>
          <button
            className={`accion ${modo === "dark" ? "dark" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`accion ${modo === "dark" ? "dark" : ""}`}
            onClick={() => handleFilterChange("active")}
          >
            Active
          </button>
          <button
            className={`accion ${modo === "dark" ? "dark" : ""}`}
            onClick={() => handleFilterChange("completed")}
          >
            Completed
          </button>
        </div>
        <div className={`opcionesDesktop ${modo === "dark" ? "dark" : ""}`}>
          <span>{lista.length} Left</span>
          <div className="cambiantesDesktop">
            <button
              className={`accion ${modo === "dark" ? "dark" : ""}`}
              onClick={() => handleFilterChange("all")}
            >
              All
            </button>
            <button
              className={`accion ${modo === "dark" ? "dark" : ""}`}
              onClick={() => handleFilterChange("active")}
            >
              Active
            </button>
            <button
              className={`accion ${modo === "dark" ? "dark" : ""}`}
              onClick={() => handleFilterChange("completed")}
            >
              Completed
            </button>
          </div>
          <button className={`accion ${modo === "dark" ? "dark" : ""}`}>
            Clear Completed
          </button>
        </div>
        <footer>
          <div className="pie">
            <span>Full Stack Developer Bootcamp</span>
            <span>Created by Carmelo Barrios</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
