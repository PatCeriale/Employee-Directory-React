import React from "react";
import "./style.css";
import API from "../../utils/API";

function PeopleCard(props) {
  //   const { name, image, occupation, location } = props.friend;
  return (
    <div className="PeopleCard">
      <div className="media">
        <img
          className="align-self-start mr-3"
          src={props.image}
          //   picture.large
          alt={props.first}
        />
        <div className="media-body">
          <h5 className="mt-0">
            <strong>
              {props.first} {props.last}
            </strong>
          </h5>
          <p>
            Address: {props.streetNumber} {props.streetName} {props.city},
            {props.state} {props.postcode}
            <br></br>Email: {props.email}
            <br></br>Phone: {props.phone}
            <br></br>Age: {props.age}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PeopleCard;
