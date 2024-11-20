import React from "react";
import "./App.css";

import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import RoutesPages from "./components/navigate";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <div className="App">
        <header className="App-header">
          <RoutesPages />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
