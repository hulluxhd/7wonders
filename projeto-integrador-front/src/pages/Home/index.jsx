import React from 'react';
import '../../App.css';
import { Box } from '@chakra-ui/react';
import PlacesList from '../../components/PlacesList';

// eslint-disable-next-line react/prop-types
function Home({ toRender }) {
  return (

    <>
      <Box />
      {/* <PlacesLibrary places={toRender} /> */}
      <PlacesList placeList={toRender} />
    </>

  );
}

export default Home;
