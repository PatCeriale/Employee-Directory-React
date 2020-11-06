import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API";
import Navbar from "./components/navbar/Navbar";
import PeopleCard from "./components/PeopleCard/PeopleCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      nameFilter: "",
      sortNum: -1,
    };
    this.searchForPeople = this.searchForPeople.bind(this);
    this.setNameFilter = this.setNameFilter.bind(this);
    this.setSortNum = this.setSortNum.bind(this);
  }
  componentDidMount() {
    this.searchForPeople();
  }
  searchForPeople(name) {
    API.getPeople(name).then((res) => {
      this.setState({
        people: res.data.results,
      });
    });
  }
  setNameFilter(filter) {
    this.setState((state) => ({ ...state, nameFilter: filter }));
  }
  setSortNum(num) {
    this.setState((state) => ({ ...state, sortNum: num }));
  }

  render() {
    return (
      <div>
        <Navbar
          setNameFilter={this.setNameFilter}
          setSortNum={this.setSortNum}
          sortNum={this.state.sortNum}
        />
        {this.state.people
          .filter((person) =>
            person.name.first.toLowerCase().includes(this.state.nameFilter)
          )
          .sort((a, b) => {
            switch (this.state.sortNum) {
              case 0:
                if (a.name.first < b.name.first) {
                  return -1;
                } else if (a.name.first > b.name.first) {
                  return 1;
                } else {
                  return +(a.name.last > b.name.last);
                }
              case 1:
                if (a.name.first < b.name.first) {
                  return 1;
                } else if (a.name.first > b.name.first) {
                  return -1;
                } else {
                  return +(a.name.last < b.name.last);
                }
              case 2:
                return b.dob.age - a.dob.age;
              case 3:
                return a.dob.age - b.dob.age;
            }
          })
          .map((person, i) => {
            return (
              <PeopleCard
                key={i}
                first={person.name.first}
                last={person.name.last}
                streetNumber={person.location.street.number}
                streetName={person.location.street.name}
                city={person.location.city}
                state={person.location.state}
                postcode={person.location.postcode}
                email={person.email}
                phone={person.phone}
                age={person.dob.age}
                image={person.picture.large}
              />
            );
          })}
      </div>
    );
  }
}

export default App;
