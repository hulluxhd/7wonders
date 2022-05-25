import React from 'react';
import PlacesList from '../../components/PlacesList';

// eslint-disable-next-line react/prop-types
function Home({ render }) {
  return (

    <PlacesList placeList={render} />

  );
}

export default Home;
