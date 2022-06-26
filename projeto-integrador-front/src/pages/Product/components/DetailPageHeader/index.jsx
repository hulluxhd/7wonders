import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ArrowUUpLeft } from 'phosphor-react';
import { Navigate, useParams } from 'react-router-dom';
import baseApi from '../../../../services/service.baseApi';

export default function DetailPageHeader() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    try {
      baseApi
      .get(`/accommodations/${productId}`)
      .then(({ data }) => {
        setProduct(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const goBack = () => {
    Navigate('/', { replace: true });
  };

  return (
    <Box
      className="detail-header"
      height="4rem"
      bgColor="var(--hard-blue)"
      color="#FFF"
      display="flex"
      alignItems="center"
      padding="0 2rem"
      justifyContent="space-between"
      position="relative"
      marginTop="-2px"
      >
      <Box as="span">
        <Text as="h4">Hoteis</Text>
        <Text as="h2">{product.accoName}</Text>
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
  );
}
