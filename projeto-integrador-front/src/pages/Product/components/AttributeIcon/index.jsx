import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger
} from '@chakra-ui/react';

import { MdPets, MdAcUnit } from 'react-icons/md';

import React from 'react';

export default function AttributeIcon() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          padding="2rem 0.5rem"
          borderRadius="25%"
          backgroundColor="#FFF"
          border="1px solid #D9B061"
          >
          <MdPets fontSize="3.5rem" color="#8D6F57" />
        </Button>
      </PopoverTrigger>

      <PopoverContent border="1px solid #8D6F57">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Permite pets</PopoverHeader>
        <PopoverBody>Esta acomodação está preparada para receber você e seu pet</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
