import React from 'react';

import { Box, Text } from '@chakra-ui/react';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBha6bbcPqbLjNHuJdRMpm5eENNi-e7fH4'
    });

    const accPosition = {
      lat: 29.97724366857695,
      lng: 31.13394399260171,
    };

  return (
    <Box>
      <Text as="h2" padding="1rem" color="var(--hard-blue)">
        Onde você vai estar
      </Text>
      <Box
        className="container"
        width="75%"
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
                  text: 'Piramides de Gize',
                  className: 'map-marker',
              }
            }} />
          </GoogleMap>
          ) : (<Text as="h4">Erro ao carregar o mapa</Text>)}
      </Box>
    </Box>
  );
}
