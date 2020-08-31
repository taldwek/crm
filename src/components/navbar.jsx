import React, { Component, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { inject, observer } from "mobx-react";

const NavBar = inject("AppStore")(
  observer((props) => {
    let location = useLocation();
    props.AppStore.setLocation(location.pathname);

    let path = props.AppStore.locationPathname;

    return (
      <div className="nav-bar">
        <Link className={path === "/clients" ? "tabActive" : ""} to="./clients">
          <span>Clients</span>
        </Link>
        <Link className={path === "/actions" ? "tabActive" : ""} to="./actions">
          <span>Actions</span>
        </Link>
        <Link
          className={path === "/analytics" ? "tabActive" : ""}
          to="./analytics"
        >
          <span>Analytics</span>
        </Link>
      </div>
    );
  })
);

export default NavBar;
