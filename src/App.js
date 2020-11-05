import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API";
import Navbar from "./components/navbar/Navbar";
import PeopleCard from "./components/PeopleCard/PeopleCard";

class App extends React.Component {
  state = {
    people: [],
  };
  componentDidMount() {
    API.getPeople().then((res) => {
      console.log(res.data);
      this.setState({
        people: res.data.results,
      });
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.state.people.map((person) => {
          return (
            <PeopleCard
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
