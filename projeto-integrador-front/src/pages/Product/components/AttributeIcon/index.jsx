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
        <Button padding="2rem 0.5rem" borderRadius="25%">
          <MdPets fontSize="3.5rem" color="var(--light-blue)" />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Permite pets</PopoverHeader>
        <PopoverBody>Esta acomodação está preparada</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
