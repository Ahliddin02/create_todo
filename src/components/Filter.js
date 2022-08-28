import React from "react";

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
  console.log(filterTodos);

  return (
    <div className="filter__all">
      {radioBtn.map((input) => (
        <div key={input.id}>
          <input
            type="radio"
            id={input.type}
            name="fav_language"
            value={input.id}
            onChange={(e) => setFilterTodos(e.target.value)}
          />
          <label for={input.type} className="text__label">
            {input.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
