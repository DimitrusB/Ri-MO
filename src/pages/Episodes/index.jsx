import { useEffect, useState } from "react";
import { fetchEpisode } from "../../api";
import { Link } from "react-router-dom";

export const EpisodeDetail = () => {
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEpisode = async () => {
      try {
        const data = await fetchEpisode();
        setEpisode(data);
      } catch (err) {
        console.error("Error fetching episode:", err);
        setError(
          "Произошла ошибка при загрузке эпизодов. Пожалуйста, попробуйте снова."
        );
      } finally {
        setLoading(false);
      }
    };
    loadEpisode();
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  );
};
