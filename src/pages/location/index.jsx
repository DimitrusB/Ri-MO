import { useParams } from "react-router-dom";
import { fetchLocation } from "../../api";
import { useEffect, useState } from "react";

export const LocationDetail = () => {
  const { locId } = useParams();
  const [location, setLocation] = useState(null);
  const [residents, setResidents] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLocation = async () => {
      try {
        const data = await fetchLocation(locId);
        setLocation(data);
        setResidents(data.residents);
      } catch (err) {
        console.error("Error fetching location:", err);
        setError(
          "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте снова."
        );
      } finally {
        setLoading(false);
      }
    };

    loadLocation();
  }, [locId]);

  console.log(location);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Локация: {location.name}</h1>
      <p>Тип: {location.type}</p>
      <p>Измерение: {location.dimension}</p>
      <h2>Жители:</h2>
      {residents.length > 0 ? (
        <ul>
          {residents.map((residentUrl, index) => (
            <li key={index}>{residentUrl}</li>
          ))}
        </ul>
      ) : (
        <p>Нет жителей в этой локации.</p>
      )}
    </div>
  );
};
