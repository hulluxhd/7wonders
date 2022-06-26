import { Box } from '@chakra-ui/react';
import { Heart, ShareNetwork } from 'phosphor-react';
import React from 'react';

export default function ShareFavIcons() {
  return (
    <Box
      h="60px"
      w="100%"
      display="flex"
      alignItems="center"
      padding="0 2rem"
      gap="1rem"
    >
      <ShareNetwork
        size={28}
        color="var(--hard-blue)"
        cursor="pointer"
      />
      <Heart
        size={30}
        color="var(--hard-blue)"
        cursor="pointer"
      />
    </Box>
  );
}
