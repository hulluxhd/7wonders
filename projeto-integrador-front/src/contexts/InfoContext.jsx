import { createContext, useState } from 'react';
import localData from '../data';

export const InfoContext = createContext();

function InfoProvider({ children }) {
  const [username, setUsername] = useState('');
  // ! Esse é o state central do header e do motor de busca. Tanto o input quanto
  // ! as funções de renderização o utilizam
  const [place, setPlace] = useState({ city: '', country: '', category: '' });

  const [cardsRender, setCardsRender] = useState(localData);

  return (
    <InfoContext.Provider
      value={{
        username,
        setUsername,
        place,
        setPlace,
        cardsRender,
        setCardsRender,
        localData,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
}

export default InfoProvider;
