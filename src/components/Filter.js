import React from "react";
import style from "./Filter.module.css";

const radioBtn = [
  {
    id: 1,
    type: "all",
    title: "All",
  },
  {
    id: 2,
    type: "done",
    title: "Done",
  },
  {
    id: 3,
    type: "notDone",
    title: "Not done",
  },
];

const Filter = ({ filterTodos, setFilterTodos }) => {
  return (
    <div className={style.filter__all}>
      {radioBtn.map((input, index) => (
        <div key={input.id}>
          <input
            type="radio"
            id={input.type}
            name="fav_language"
            value={index + 1}
            checked={index + 1 === filterTodos}
            onChange={(e) => setFilterTodos(+e.target.value)}
          />
          <label for={input.type} className={style.text__label}>
            {input.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
