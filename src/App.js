import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchCharacters } from "./api";
import Dring from "./img/8.gif";
import { ListHeroes } from "./components/list";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters();
        if (data && data.results) {
          setCharacters(data.results);
          console.log(data.results); 
        } else {
          throw new Error("Данные не содержат свойства results");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadCharacters();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ListHeroes ring={Dring} characters={characters} loading={loading} />
      </header>
    </div>
  );
}

export default App;
