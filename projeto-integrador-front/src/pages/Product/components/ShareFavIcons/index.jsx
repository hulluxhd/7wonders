import { Box } from '@chakra-ui/react';
import { Heart, ShareNetwork } from 'phosphor-react';
import React from 'react';

export default function ShareFavIcons() {
  return (
    <Box
      alignItems="center"
      padding="0 2rem"
      display="flex"
      height="60px"
      width="100%"
      gap="1rem"
    >
      <ShareNetwork
        cursor="pointer"
        color="#D9B061"
        size={28}
      />
      <Heart
        color="#D9B061"
        cursor="pointer"
        size={30}
      />
    </Box>
  );
}
