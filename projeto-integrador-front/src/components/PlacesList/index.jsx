import React, { useContext, useState } from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
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

function PlacesList() {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const { cardsRender } = useContext(InfoContext);
  const [swiperProxy, setSwiperProxy] = useState({})
  return (
    <Wrapper>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={25}
        slidesPerView={3}
        navigation
        grabCursor
        roundLengths={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiperProxy(swiper)}
      >
      {console.log(swiperProxy)}
        {cardsRender.map((card, i) => (
          <SwiperSlide key={card.name}>
            <PlaceCard place={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
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
