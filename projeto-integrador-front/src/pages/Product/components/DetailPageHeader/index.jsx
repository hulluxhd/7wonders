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
      // height="4rem"
      bgColor="#3F0D0C"
      color="#FFF"
      marginTop="-2px"
    >
      <Box
        width="90%"
        maxWidth="1440px"
        margin="0 auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="0.75rem 0"
      >
        <Box as="span">
          <Text as="h4">Hotel</Text>
          <Text as="h2">{name}</Text>
        </Box>
        <Box
          onClick={goBack}
          as="button"
          type="button"
          float="right"
          padding="0 0 0 1rem"
        >
          <ArrowUUpLeft size={32} color="#FFF" />
        </Box>
      </Box>
    </Box>
  );
}
