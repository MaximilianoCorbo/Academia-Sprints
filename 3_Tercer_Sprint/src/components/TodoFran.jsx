import "./Todo.css";
import check from "../assets/img/icon-check.svg";
import cross from "../assets/img/icon-cross.svg";
import { useState } from "react";

const Todo = ({ theme }) => {
  const todoList = [
    { id: 1, content: "Tomar agua", completed: true },
    {
      id: 2,
      content: "Finalizar práctica de estados y props",
      completed: false,
    },
    { id: 3, content: "Tomar agua", completed: false },
    {
      id: 4,
      content: "Compartir lo aprendido con algún compañero",
      completed: false,
    },
    { id: 5, content: "Probar pizza italiana", completed: false },
    { id: 6, content: "Completar el desafío del sprint 3", completed: false },
  ];
  const [List, setList] = useState(todoList);
  const [filtrado, setFiltrado] = useState(todoList);
  const handleFilterChange = (newFilter) => {
    let tareasFiltradas = [];
    switch (newFilter) {
      case "active":
        tareasFiltradas = List.filter((tarea) => tarea.completed);
        break;
      case "completed":
        tareasFiltradas = List.filter((tarea) => !tarea.completed);
        break;
      default:
        tareasFiltradas = List;
        break;
    }
    console.log(tareasFiltradas);
    setFiltrado(tareasFiltradas);
  };

  function setComplete(id) {
    setList(
      List.map((item) => {
        if (item.id == id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  }

  function filterAll() {}

  function filterComplete() {}

  function filterActive() {}

  function ClearComplete() {}

  return (
    <div className={`lista`}>
      <input
        type="text"
        placeholder="Create a new task..."
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            const id = List.length > 0 ? List[List.length - 1].id + 1 : 1;
            setList([
              ...List,
              { id: id, content: event.target.value, completed: false },
            ]);
            return List;
          }
        }}
      />

      <ul className={`tareas ${theme}`}>
        {filtrado.map((item) => {
          return (
            <li key={item.id} className={item.completed ? `taskComplete` : ``}>
              <button
                className={
                  item.completed ? `buttonComplete` : `buttonIncomplete`
                }
                onClick={() => setComplete(item.id)}
              >
                {item.completed && <img src={check} alt="" />}
              </button>
              <label htmlFor={item.id}></label>

              <span>{item.content}</span>
            </li>
          );
        })}
        <li className="botones">
          <span>{List.length} task left</span>
          <div>
            <button onClick={() => handleFilterChange("all")}>All</button>
            <button onClick={() => handleFilterChange("active")}>Active</button>
            <button>Completed</button>
          </div>
          <button>Clear Completed</button>
        </li>
      </ul>
    </div>
  );
};

export default Todo;

//Consultar por qué en consola vuelve a largar el mensaje de 6 items en el array.
//No se crean nuevas tareas.
