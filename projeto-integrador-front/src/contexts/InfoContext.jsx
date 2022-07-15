import React, {
 createContext, useEffect, useMemo, useState
} from 'react';
import localData from '../data';
import baseApi from '../services/service.baseApi';
import url from '../services/urls';

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

useEffect(() => {
  try {
    baseApi
      .get(url.USER_INFO, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(({ data: userData }) => {
        console.log(userData);
        setUser({
          name: userData.name,
          surname: userData.surname,
          roles: userData.roles,
          favorites: userData.favorites,
          email: userData.username,
        });
      });
    console.log('passou');
  } catch (e) {
    console.error(e);
  }
}, []);

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
