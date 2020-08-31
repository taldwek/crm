import React from "react";

function Add() {
  return (
    <div className="actions-section-container">
      <div className="actions-update-row">
        <label htmlFor="">First Name: </label>
        <input className="clientsInput"></input>

      </div>
      <div className="actions-update-row">
        <label htmlFor="">Surname: </label>
        <input className="clientsInput"></input>

      </div>
      <div className="actions-update-row">
        <label htmlFor="">Country: </label>
        <input
          className="clientsInput"
        ></input>
      </div>
      <div className="actions-update-row">
        <label htmlFor="">Owner:</label>
        <input className="clientsInput"></input>
      </div>
    </div>
  );
}

export default Add;
