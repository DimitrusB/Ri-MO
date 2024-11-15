import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchCharacters } from "./api";
import Dring from "./img/8.gif";

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
          console.log(data.results); // Проверяем, что мы устанавливаем в состояние
        } else {
          throw new Error("Данные не содержат свойства results");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters(); // Вызов функции для загрузки персонажей
  }, []); // Пустой массив зависимостей, чтобы вызвать эффект только при монтировании

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <div>
            <img
              src={Dring}
              alt="Загрузка..."
              style={{ width: "200px", height: "200px" }} // Убедитесь, что размеры изображения заданы
            />
          </div>
        ) : (
          <>
            <h1>Персонажи Рика и Морти</h1>
            <ul>
              {characters.length > 0 ? (
                characters.map((character) => (
                  <li key={character.id}>
                    <a
                      href={character.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {character.name}
                    </a>
                  </li>
                ))
              ) : (
                <li>Нет персонажей для отображения</li>
              )}
            </ul>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
