import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="./actions">
        <span>Actions</span>
      </Link>
      <Link to="./clients">
        <span>Clients</span>
      </Link>
      <Link to="./analytics">
        <span>Analytics</span>
      </Link>
    </div>
  );
}

export default NavBar;
