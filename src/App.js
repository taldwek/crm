import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Container from "./components/container";


const App = () => {

    return ( <
        Router >
        <
        div className = "App" > { /* <Redirect from="/" to ="/clients" /> */ } <
        NavBar / >
        <
        Container / >
        <
        /div> <
        /Router>
    );
}

export default App;
//