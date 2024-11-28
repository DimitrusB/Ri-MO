import { Link, useParams } from "react-router-dom";
import { emptyFetch, fetchLocation } from "../../api";
import { useEffect, useState } from "react";
import home from "../../img/home.svg"

export const LocationDetail = () => {
  const { locId } = useParams();
  const [location, setLocation] = useState(null);
  const [residentNames, setResidentNames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const residentsPerPage = 10;

  useEffect(() => {
    const loadLocation = async () => {
      try {
        const data = await fetchLocation(locId);
        setLocation(data);

        const names = await Promise.all(
          data.residents.map(residentUrl =>
            emptyFetch(residentUrl).then(resident => resident.name)
          )
        );
        setResidentNames(names);
      } catch (err) {
        console.error("Error fetching location:", err);
        setError("Произошла ошибка при загрузке данных. Пожалуйста, попробуйте снова.");
      } finally {
        setLoading(false);
      }
    };

    loadLocation();
  }, [locId]);

  const indexOfLastResident = currentPage * residentsPerPage;
  const indexOfFirstResident = indexOfLastResident - residentsPerPage;
  const currentResidents = residentNames.slice(indexOfFirstResident, indexOfLastResident);

  const totalPages = Math.ceil(residentNames.length / residentsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
        <Link to="/">
          <img src={home} style={{ width: "50px" }} alt="Home" />
        </Link>
      <h1>Локация: {location.name}</h1>
      <p>Тип: {location.type}</p>
      <p>Измерение: {location.dimension}</p>
      <h2>Жители:</h2>
      {currentResidents.length > 0 ? (
        <ul>
          {currentResidents.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>Нет жителей в этой локации.</p>
      )}
      
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span> Страница {currentPage} из {totalPages} </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};
