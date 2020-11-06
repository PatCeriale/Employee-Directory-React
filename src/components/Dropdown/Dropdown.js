import React from "react";
import "./style.css";

function Dropdown(props) {
  function handleSort(sortNum) {
    props.setSortNum(sortNum);
  }
  function getClass(sortNum) {
    if (props.sortNum === sortNum) {
      return "dropdown-item active";
    } else {
      return "dropdown-item";
    }
  }
  return (
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
        <a className={getClass(0)} href="#" onClick={() => handleSort(0)}>
          Name (A-Z)
        </a>
        <a className={getClass(1)} href="#" onClick={() => handleSort(1)}>
          Name (Z-A)
        </a>
        <a className={getClass(2)} href="#" onClick={() => handleSort(2)}>
          Age (Old to New)
        </a>
        <a className={getClass(3)} href="#" onClick={() => handleSort(3)}>
          Age (New to Old)
        </a>
      </div>
    </div>
  );
}

export default Dropdown;
