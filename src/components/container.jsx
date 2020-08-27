import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Actions from "./actions/Actions";
import Clients from "./clients/Clients";
import Analytics from "./analytics/Analytics";

function Container() {
  return (
      <div>
        <Route path="/clients" exact render={() => <Clients />} />
        <Route path="/actions" exact render={() => <Actions />} />
        <Route path="/analytics" exact render={() => <Analytics />} />
    </div>
  );
}

export default Container;
