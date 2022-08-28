import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import style from "./TodoList.module.css";

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
        .filter((e) => (filterTodos === 1 ? true : filterTodos === 2 ? e.completed : !e.completed))

        .map((todo) => (
          <li className={style.list__item} key={todo.id}>
            <input
              type="text"
              value={todo.title}
              className={`list ${todo.completed ? "complete" : ""}`}
              onChange={(event) => event.preventDefault()}
            />
            <div className={style.variants}>
              <button className={style.button__complete} onClick={() => handleComplete(todo)}>
                <input type="checkbox" className={style.check__box} checked={todo.completed} />
              </button>
              <button className={style.button__edit} onClick={() => handleEdit(todo)}>
                <AiFillEdit />
              </button>
              <button className={style.button__delete} onClick={() => handleDelete(todo)}>
                <AiFillDelete />
              </button>
            </div>
          </li>
        ))}
    </div>
  );
};

export default TodosList;
