import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCharactersById } from "../../api"; // Ensure this path is correct

export const HeroDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        const data = await fetchCharactersById(id);
        setCharacter(data);
      } catch (err) {
        console.error("Error fetching character:", err);
        setError(
          "Произошла ошибка при загрузке персонажа. Пожалуйста, попробуйте снова."
        );
      } finally {
        setLoading(false);
      }
    };
    loadCharacter();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Link to="/">Home</Link>
      <div>
        <img
          src={character?.image || "default-image-url.jpg"}
          alt={character?.name || "Персонаж"}
        />
        <h1>Имя: {character?.name || "Имя недоступно"}</h1>
        <h2>Пол: {character?.gender || "???"}</h2>
        <h2>Статус: {character?.status || "???"}</h2>
        <h2>Вид: {character?.species || "???"}</h2>
        <p>
          Место расположения:{" "}
          {character?.location.name || "Описание недоступно."}
        </p>
        {/* <a href={character?.location?.url || "#"} target="_blank">
          {character?.location?.name || "Описание недоступно."}
        </a>{" "} */}
      </div>
    </div>
  );
};
