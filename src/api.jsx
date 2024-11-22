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
  
  export const fetchCharactersById = async (id) => {
    const response = await fetch(`${url}/character/${id}`);
    if (!response.ok) {
      throw new Error("Ошибка сети");
    }
    const data = await response.json();
    return data; 
  };
  
  export const fetchEpisode = async () => {
    const response = await fetch(url + "/episode");
    if (!response.ok) {
      throw new Error("Ошибка сети");
    }
    const data = await response.json();
    return data; 
  };
  