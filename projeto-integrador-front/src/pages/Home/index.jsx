import React from 'react';
import PlacesList from '../../components/PlacesList';

function Home({ render }) {
  return (

    <PlacesList placeList={render} />

  );
}

export default Home;
