import React from "react";
import "./App.css";

import { BrowserRouter as Router } from 'react-router-dom';
import RoutesPages from "./components/navigate";


function App() {


  return (
    <Router   future={{
      v7_relativeSplatPath: true,
    }}>
    <div className="App">

      <header className="App-header">
      <RoutesPages/>
      </header>
    </div>
    </Router>
  );
}

export default App;
