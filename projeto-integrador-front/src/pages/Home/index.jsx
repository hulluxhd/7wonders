import React from 'react';
import PlacesList from '../../components/PlacesList';
import Categories from '../../components/Categories';

function Home({ render }) {
  return (
    <>
      <Categories />
      <PlacesList placeList={render} />
    </>
  );
}

export default Home;
