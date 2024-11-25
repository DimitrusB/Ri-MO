import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCharactersById, fetchEpisode } from "../../api";

export const EpisodeDetail = () => {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const loadEpisodes = async () => {
      try {
        const data = await fetchEpisode();
        setEpisodes(data.results);
        const filtered = data.results.filter((episode) =>
          episode.characters.some((characterUrl) =>
            characterUrl.endsWith(`/${id}`)
          )
        );
        setFilteredEpisodes(filtered);
      } catch (err) {
        console.error("Error fetching episodes:", err);
        setError(
          "Произошла ошибка при загрузке эпизодов. Пожалуйста, попробуйте снова."
        );
      } finally {
        setLoading(false);
      }
    };
    loadEpisodes();
  }, [id]);

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
      }}

    loadCharacter();


  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div>
      <Link to="/">Home</Link>
      <h2>Эпизоды с персонажем {character.name}:</h2>
      {filteredEpisodes.length > 0 ? (
        <ul>
          {filteredEpisodes.map((episode) => (
            <li key={episode.id}>
              <h3>{episode.name}</h3>
              <p>Дата выхода: {episode.air_date}</p>
              <p>Описание: {episode.summary || "Нет описания."}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Эпизоды с персонажем ID {id} не найдены.</p>
      )}
    </div>
  );
};
