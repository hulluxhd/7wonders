import { Box } from '@chakra-ui/react';
import { Heart, ShareNetwork } from 'phosphor-react';
import React from 'react';

export default function ShareFavIcons() {
  return (
    <Box
      height="60px"
      width="100%"
      display="flex"
      alignItems="center"
      padding="0 2rem"
      gap="1rem"
    >
      <ShareNetwork
        size={28}
        color="#D9B061"
        cursor="pointer"
      />
      <Heart
        size={30}
        color="#D9B061"
        cursor="pointer"
      />
    </Box>
  );
}
