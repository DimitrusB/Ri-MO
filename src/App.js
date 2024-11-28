import React from "react";
import "./App.css";
import home from "./img/home.svg";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import RoutesPages from "./components/navigate";

function App() {
  const location = useLocation(); 

  const getTitle = () => {
    if (location.pathname === "/") {
      return "Персонажи Рика и Морти";
    } else {
      return "Описание";
    }
  };

  return (
    <div style={{ width: "100%", height: "376px", backgroundColor: "white" }}>
      <Link to="/">
        <img src={home} style={{ margin: "50px" }} alt="Home" />
      </Link>
      <h1 style={{ textAlign: "center", color: "black" }}>{getTitle()}</h1>
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
    <div className="App">
      <header className="App-header">
        <RoutesPages />
      </header>
    </div>
  </Router>
);

export default AppWrapper;
