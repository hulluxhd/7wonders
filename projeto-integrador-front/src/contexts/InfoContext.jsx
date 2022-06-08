import { createContext, useState } from 'react';
import localData from '../data';

export const InfoContext = createContext();

function InfoProvider({ children }) {
  const [username, setUsername] = useState('');
  // ! Esse é o state central do header e do motor de busca. Tanto o input quanto
  // ! as funções de renderização o utilizam
  const [place, setPlace] = useState({ city: '', country: '', category: '' });
  const [toRenderOnDropdown, setToRenderOnDropdown] = useState(localData);
  const [cardsRender, setCardsRender] = useState(toRenderOnDropdown);

  // função que filtra os lugares baseado na busca do usuário
  function filterPlaces() {


    if (place.city || place.category) {
      return localData.filter(
        el => el.city.toLowerCase().includes(place.city.toLowerCase()) ||
          el.country.toLowerCase().includes(place.city.toLowerCase()) ||
          el.category === place.category
      );
    }
    return localData
  }

  return (
    <InfoContext.Provider
      value={{
        username,
        setUsername,
        place,
        setPlace,
        toRenderOnDropdown,
        setToRenderOnDropdown,
        cardsRender,
        setCardsRender,
        localData,
        filterPlaces
      }}
    >
      {children}
    </InfoContext.Provider>
  );
}

export default InfoProvider;
