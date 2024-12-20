import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCharactersById } from "../../api";

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

  const getStatusText = (status) => {
    switch (status) {
      case "Alive":
        return "Жив";
      case "Dead":
        return "Мертв";
      case "Unknown" || "":
        return "Неизвестно";
      default:
        return "???";
    }
  };

  const getGenderText = (gen) => {
    switch (gen) {
      case "Male":
        return "Мужчина";
      case "Female":
        return "Женщина";
      case "Unknown" || "":
        return "Неизвестно";
      default:
        return "???";
    }
  };
  const getSpeciesText = (spec) => {
    switch (spec) {
      case "Human":
        return "Человек";
      case "Alive":
        return "Инопланетянин";
      case "Unknown" || "":
        return "Неизвестно";
      default:
        return "???";
    }
  };
  const urlLoc = character.location.url;
  const lastIndex = urlLoc.lastIndexOf('/')
  const locationId = urlLoc.slice(lastIndex+1)
  console.log(locationId);
  

  return (
    <div>
      <Link to="/">Home</Link>
      <div>
        <img
          src={character?.image || "default-image-url.jpg"}
          alt={character?.name || "Персонаж"}
        />
        <h1>Имя: {character?.name || "Имя недоступно"}</h1>
        <h2>Пол: {getGenderText(character?.gender)}</h2>
        <h2>Статус: {getStatusText(character?.status)}</h2>
        <h2>Вид: {getSpeciesText(character?.species)}</h2>
        <p>
          Место обитания:
          <Link to={`/location/${locationId}`}>

            {character?.location.name || "Описание недоступно."}
          </Link>
        </p>
      </div>
      <Link to={`/episode/${character.id}`}>
        <h3>Эпизоды:</h3>
      </Link>
    </div>
  );
};
