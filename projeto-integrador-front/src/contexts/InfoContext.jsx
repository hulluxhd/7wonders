import React, { createContext, useMemo, useState } from 'react';
import localData from '../data';

export const InfoContext = createContext();

function InfoProvider({ children }) {
  const [user, setUser] = useState({});

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
          user,
          setUser,
          place,
          setPlace,
          cardsRender,
          setCardsRender,
          localData,
          dateCheckinAndCheckout,
          setDateCheckinAndCheckout,
        }),
        [
          user,
          setUser,
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
