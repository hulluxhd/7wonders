import React from 'react';
import PlacesList from '../../components/PlacesList';
import Categorys from '../../components/Categorys';

function Home({ render }) {
  return (
    <>
    <Categorys />
    <PlacesList placeList={render} />
    </>

  );
}

export default Home;
