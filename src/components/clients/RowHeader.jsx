import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from "react-router-dom";


function RowHeader() {
  return (
    <tr>
      <th>Name</th>
      <th>Surname</th>
      <th>Country</th>
      <th>First Contact</th>
      <th>Email</th>
      <th>Sold</th>
      <th>Owner</th>
    </tr>
  );
}

export default RowHeader;
