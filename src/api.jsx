// URL API
const url = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async () => {
    const response = await fetch(url + "/character");
    if (!response.ok) {
      throw new Error("Ошибка сети");
    }
    const data = await response.json();
    return data; 
  };
  