import React, { createContext, useMemo, useState } from 'react';
import localData from '../data';

export const InfoContext = createContext();

function InfoProvider({ children }) {
  const [username, setUsername] = useState('');
  // ! Esse é o state central do header e do motor de busca. Tanto o input quanto
  // ! as funções de renderização o utilizam
  const [place, setPlace] = useState({
    city: '',
    cityId: null,
    country: '',
    category: '',
  });

  const [cardsRender, setCardsRender] = useState(localData);

  const [dateCheckinAndCheckout, setDateCheckinAndCheckout] = useState(null);

  return (
    <InfoContext.Provider
      value={useMemo(
        () => ({
          username,
          setUsername,
          place,
          setPlace,
          cardsRender,
          setCardsRender,
          localData,
          dateCheckinAndCheckout,
          setDateCheckinAndCheckout,
        }),
        [
          username,
          setUsername,
          place,
          setPlace,
          cardsRender,
          setCardsRender,
          localData,
          dateCheckinAndCheckout,
          setDateCheckinAndCheckout,
        ]
      )}
    >
      {children}
    </InfoContext.Provider>
  );
}

export default InfoProvider;
