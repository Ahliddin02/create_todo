import React from "react";
import style from "./Filter.module.css";
import { HiOutlineFilter } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ onFilterClick, onSearchClick, hanlderSearchTodos }) => {
  return (
    <div className={style.container}>
      <div className={style.filter__sorting}>
        <HiOutlineFilter className={style.icons} onClick={onFilterClick} />
      </div>
      <div className={style.inputSearch}>
        <input
          placeholder="Search"
          className={style.input__filter}
          onChange={(e) => hanlderSearchTodos(e.target.value)}
        />
      </div>
      <div className={style.filter__sorting}>
        <AiOutlineSearch className={style.icons} onClick={onSearchClick} />
      </div>
    </div>
  );
};

export default Search;
