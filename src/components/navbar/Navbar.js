import React from "react";
import "./style.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Employee Directory</h2>
      <div className="searchDiv">
        <form className="form-inline md-form mr-auto mb-4">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search for employee"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-warning btn-rounded btn-sm my-auto"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter by:
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Name (A-Z)
            </a>
            <a className="dropdown-item" href="#">
              Name (Z-A)
            </a>
            <a className="dropdown-item" href="#">
              Age (Old to New)
            </a>
            <a className="dropdown-item" href="#">
              Age (New to Old)
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
