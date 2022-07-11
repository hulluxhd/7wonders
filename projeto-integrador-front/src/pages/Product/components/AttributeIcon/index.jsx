import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';

import { MdPets, MdAcUnit } from 'react-icons/md';

import React from 'react';

export default function AttributeIcon() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button padding="2rem 0.5rem" borderRadius="0.25rem">
          <MdPets fontSize="2.5rem" color="var(--hard-blue)" />
        </Button>
      </PopoverTrigger>

      <PopoverContent border="1px solid #8D6F57">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Permite pets</PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}
