import React, { useContext, useEffect, useState } from 'react';
import { Box, Image, useMediaQuery } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y
} from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import PlaceCard from '../PlaceCard';
import Wrapper from '../Wrapper';
import { InfoContext } from '../../contexts/InfoContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import prev from '../../assets/prev-galeria.svg'
import next from '../../assets/next-galeria.svg'

function PlacesList() {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const { cardsRender } = useContext(InfoContext);
  const [swiperProxy, setSwiperProxy] = useState({})

  return (
    <Wrapper mb="2rem">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        grabCursor
        pagination={{ clickable: true }}
        breakpoints={{
          606: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        }}
        onSwiper={(swiper) => setSwiperProxy(swiper)}
      >
        {/*Controladores do carrossel*/}
        <Image position="absolute"
          zIndex={10}
          top="50%"
          left="10px"
          src={prev}
          w="3rem"
          cursor="pointer"
          mt="-1.5rem"
          onClick={() => swiperProxy.slidePrev()} />
        <Image position="absolute"
          zIndex={10}
          top="50%"
          right="10px"
          src={next}
          w="3rem"
          cursor="pointer"
          mt="-1.5rem"
          onClick={() => swiperProxy.slideNext()} />
        {cardsRender.map((card) => (
          <SwiperSlide key={card.name}>
            <PlaceCard place={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper >
  );
}

export default PlacesList;

/* PlacesList.propTypes = {
  placeList: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    about: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  })).isRequired,
};
 */
