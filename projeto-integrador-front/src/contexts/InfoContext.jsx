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
        localData
      }}
    >
      {children}
    </InfoContext.Provider>
  );
}

export default InfoProvider;
