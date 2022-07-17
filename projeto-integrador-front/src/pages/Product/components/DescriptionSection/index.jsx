import { Box, Text, UnorderedList } from '@chakra-ui/react';
// import { PawPrint } from 'phosphor-react';
// import { FontsAwesome } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MdPets, MdAcUnit } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import { List } from 'phosphor-react';
import AttributeIcon from '../AttributeIcon';
import BasicButton from '../../../../components/BasicButton';

export default function DescriptionSection({ info }) {
  const navigate = useNavigate();
  const description = document.querySelector('#description-text');
  const descriptionButton = document.querySelector('#description-button');
  return (
    <Box
      flexDirection={{ base: 'column', lg: 'row' }}
      className="description-section container"
      display="flex"
    >
      <Box
        padding="2rem"
        position="relative"
        display="flex"
        flexDirection="column"
        width={{ base: '100%', xl: '50%' }}
      >
        <Text
          as="h2"
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
          paddingBottom="1rem"
        >
          Umas das melhores localizações de Miami
        </Text>
        <Text
          id="description-text"
          className="description hided"
          color="var(--hard-blue)"
          fontWeight="500"
          fontSize={{ base: '1rem', lg: '1rem' }}
          lineHeight="1.6"
        >
          {info.description}
        </Text>
        <Text
          onClick={() => {
            description.classList.toggle('hided');
            descriptionButton.innerText === 'Ler mais'
              ? (descriptionButton.innerText = 'Ler menos')
              : (descriptionButton.innerText = 'Ler mais');
          }}
          id="description-button"
          value="true"
          cursor="pointer"
          color="var(--blue)"
        >
          Ler mais
        </Text>
      </Box>
      <Box
        margin={{ base: 'auto', lg: '0 auto', xl: '0 auto' }}
        boxShadow="2px 6px 20px var(--hard-blue)"
        width={{ base: '90%', xl: '40%' }}
        className="accHighlights"
        color="var(--hard-blue)"
        borderRadius="10px"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        height="auto"
        padding="2rem"
      >
        <Text as="h2" paddingBottom="1rem">
          Essa acomodação oferece:
        </Text>

        <Box
          className="attribute-icons-container"
          justifyContent={{ base: 'start', lg: 'space-evenly' }}
          flexWrap="wrap"
          display="flex"
          gap="1rem"
        >
          <AttributeIcon />
          <AttributeIcon />
          <AttributeIcon />
          <AttributeIcon />
          <AttributeIcon />
        </Box>

        <Text as="h2" padding="2rem 0 1rem">
          {`R$${info.price},00/noite`}
        </Text>

        <Box display="flex" className="button-container">
          <BasicButton
            description="Reservar"
            width="90%"
            onClick={() => navigate(`/reserve/accommodations/${info.id}`)}
          />
        </Box>
      </Box>
    </Box>
  );
}
