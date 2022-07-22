import React, {
  createContext, useEffect, useMemo, useState
} from 'react';
import localData from '../data';
import baseApi from '../services/service.baseApi';
import url from '../services/urls';

export const InfoContext = createContext();

function InfoProvider({ children }) {
  const [dateCheckinAndCheckout, setDateCheckinAndCheckout] = useState(null);
  const [cardsRender, setCardsRender] = useState(localData);
  const [user, setUser] = useState({});
  const [place, setPlace] = useState({
    cityId: null,
    country: '',
    category: '',
    city: '',
  });

  useEffect(() => {
    try {
      baseApi
        .get(url.USER_INFO, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then(({ data: userData }) => {
          setUser({
            favorites: userData.favorites,
            surname: userData.surname,
            email: userData.username,
            roles: userData.roles,
            name: userData.name,
          });
        });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <InfoContext.Provider
      value={useMemo(
        () => ({
          user,
          place,
          setUser,
          setPlace,
          cardsRender,
          setCardsRender,
          dateCheckinAndCheckout,
          setDateCheckinAndCheckout,
        }),
        [
          user,
          place,
          setUser,
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
