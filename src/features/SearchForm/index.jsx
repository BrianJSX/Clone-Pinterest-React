// import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useDispatch } from "react-redux";
import {fetchPinSearch} from "../Pin/pinSlice";

import "./style.scss";

export default function SearchForm() {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
        dispatch(fetchPinSearch(e.target.value));
  };

  return (
    <div className="navigation__search">
      <div className="navigation__search-icon">
        {/* <SearchIcon></SearchIcon> */}
      </div>
      <div className="navigation__search-input">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="input-search"
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}
