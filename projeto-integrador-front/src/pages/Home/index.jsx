import React from 'react';
import PlacesList from '../../components/PlacesList';
import Categorys from '../../components/Categorys';

// eslint-disable-next-line react/prop-types
function Home({ render }) {
  return (
    <>
    <Categorys />
    <PlacesList placeList={render} />
    </>

  );
}

export default Home;
