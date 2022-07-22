import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
} from '@chakra-ui/react';
import { ArrowUUpLeft } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

export default function DetailPageHeader({ name }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box
      className="detail-header"
      bgColor="#3F0D0C"
      // height="4rem"
      marginTop="-2px"
      color="#FFF"
    >
      <Box
        justifyContent="space-between"
        padding="0.75rem 0"
        alignItems="center"
        maxWidth="1440px"
        margin="0 auto"
        display="flex"
        width="90%"
      >
        <Box as="span">
          <Text as="h4">Hotel</Text>
          <Text as="h2">{name}</Text>
        </Box>
        <Box
          padding="0 0 0 1rem"
          onClick={goBack}
          type="button"
          float="right"
          as="button"
        >
          <ArrowUUpLeft size={32} color="#FFF" />
        </Box>
      </Box>
    </Box>
  );
}
