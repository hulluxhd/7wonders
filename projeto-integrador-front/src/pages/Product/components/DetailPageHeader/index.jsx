import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';
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
      // height="4rem"
      bgColor="var(--hard-blue)"
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
    </Box>
  );
}
