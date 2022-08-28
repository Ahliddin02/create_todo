import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const TodosList = ({ todos, setTodos, setEditTodo, inputSearch, filterTodos }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos
        .filter((el) => el.title.search(inputSearch) !== -1)
        .filter((el) => el.id.search(filterTodos) !== -1)
        .map((todo) => (
          <li className="list__item" key={todo.id}>
            <input
              type="text"
              value={todo.title}
              className={`list ${todo.completed ? "complete" : ""}`}
              onChange={(event) => event.preventDefault()}
            />
            <div className="variants">
              <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                <input type="checkbox" className="check__box" id="checkbox1" />
              </button>
              <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                <AiFillEdit />
              </button>
              <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                <AiFillDelete />
              </button>
            </div>
          </li>
        ))}
    </div>
  );
};

export default TodosList;
