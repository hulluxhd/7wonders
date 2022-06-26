import React from 'react';

import { Box } from '@chakra-ui/react';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD70a-GCHov2z7jSC2t8ivF0_drRNVbv84'
    });

    const accPosition = {
      lat: -19.391205,
      lng: -40.049750,
    };

  return (
    <div>
      <Box
        width={{ base: '90vw', xl: '75vw' }}
        height={{ base: '60vh', xl: '60vh' }}
        margin="0 auto"
      >
        { isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={accPosition}// accomodation location
            zoom={10}
          >
            <Marker position={accPosition} />
          {/* <></> */}
          </GoogleMap>
          ) : <div><h4>Erro ao carregar o mapa</h4></div>};
      </Box>
    </div>
  );
}
