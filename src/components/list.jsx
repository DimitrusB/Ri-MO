import React from "react";

export const ListHeroes = ({ ring, characters, loading }) => {
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
      ) : (
        <>
          <h1>Персонажи Рика и Морти</h1>
         <div>
            {characters.length > 0 ? (
              characters.map((character) => (
                <div>
                <p key={character.id}>
                  <img
                    src={character.image}
                    style={{ width: "auto", height: "100px" }}
                    alt={character.name}
                  />
                  <a
                    href={character.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {character.name}
                  </a>
                </p>
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
