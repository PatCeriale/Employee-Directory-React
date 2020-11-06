import React from "react";
import "./style.css";
import SearchBar from "../SearchBar/SearchBar";
import Dropdown from "../Dropdown/Dropdown";
// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar(props) {
  return (
    <nav className="navbar">
      <h2>Employee Directory</h2>
      <div className="searchDiv">
        <SearchBar {...props} />
        <Dropdown {...props} />
      </div>
    </nav>
  );
}

export default Navbar;
