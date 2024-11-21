import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../api";
import ring from "../img/8.gif";
import * as S from "./list.styled";
import { Link } from "react-router-dom";

export const ListHeroes = () => {
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
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadCharacters();
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <img
            src={ring}
            alt="Загрузка..."
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      ) : error ? (
        <div>
          <p>Ошибка загрузки персонажей: {error}</p>
        </div>
      ) : (
        <>
          <h1>Персонажи Рика и Морти</h1>
          <div>
            {characters.length > 0 ? (
              characters.map((character) => (
                <div key={character.id}>
                  <S.pImg>
                    <img src={character.image} alt={character.name} />
                    <Link to={`/hero/${character.id}`}>{character.name}</Link>
                  </S.pImg>
                </div>
              ))
            ) : (
              <li>Нет персонажей для отображения</li>
            )}
          </div>
        </>
      )}
    </>
  );
};
