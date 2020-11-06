import React from "react";
import API from "../../utils/API";

export default class SearchBar extends React.Component {
  state = {
    searchPeople: "",
    // name: [],
    // results: [],
  };

  componentDidMount() {}

  handleInputChange = (event) => {
    // const {name,value} = event.target;
    this.props.setNameFilter(event.target.value.toLowerCase());
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleFormSubmit}>
          {/* <datalist id="name">
            {this.state.name.map((name) => (
              <option>{name}</option>
            ))}
          </datalist> */}
          <input
            name="searchPeople"
            list="name"
            // value={this.state.searchPeople}
            onChange={this.handleInputChange}
          />
          <button>Search!</button>
        </form>
        {this.state.results?.map((pic) => (
          <img src={pic} />
        ))}
      </div>
    );
  }
}

// export default SearchBar;
