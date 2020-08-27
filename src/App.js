import React from "react";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import NavBar from "./components/navbar";
import Container from "./components/container";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Container />
      </div>
    </Router>
  );
}

export default App;
