import React from 'react';

import { Box, Text } from '@chakra-ui/react';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBha6bbcPqbLjNHuJdRMpm5eENNi-e7fH4'
    });

    const accPosition = {
      lat: -19.391205,
      lng: -40.049750,
    };

  return (
    <div>
      <Text as="h2" padding="1rem" color="var(--hard-blue)">
        Onde você vai estar
      </Text>
      <Box
        className="container"
        width="100%"
        height={{ base: '60vh', xl: '70vh' }}
        position="relative"
      >
        { isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={accPosition}
            zoom={15}
          >
            <Marker
              position={accPosition}
              options={{
                label: {
                  text: 'NOME DA ACC',
                  className: 'map-marker',
              }
            }} />
          </GoogleMap>
          ) : <div><h4>Erro ao carregar o mapa</h4></div>}
      </Box>
    </div>
  );
}
