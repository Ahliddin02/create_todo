import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import Form from "./components/Form";
import Filter from "./components/Filter";
import TodosList from "./components/TodosList";

const App = () => {
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [filterTodos, setFilterTodos] = useState(1);

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleFilter = () => {
    setFilter(!filter);
  };
  const handleSearch = () => {
    setSearch(!search);
  };

  const hanlderSearchTodos = (value) => {
    setInputSearch(value);
  };

  console.log(filterTodos);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Search onFilterClick={handleFilter} onSearchClick={handleSearch} hanlderSearchTodos={hanlderSearchTodos} />
        </div>
        {filter && (
          <div style={{ position: "absolute", zIndex: "999" }}>
            <Filter filterTodos={filterTodos} setFilterTodos={setFilterTodos} />
          </div>
        )}

        {search && (
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
        )}

        <div className="title">
          <div>{search ? "Task" : "Searching results"}</div>
        </div>

        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
            inputSearch={inputSearch}
            filterTodos={filterTodos}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
