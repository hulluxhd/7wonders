import React, { useContext, useState } from 'react';
import { Image } from '@chakra-ui/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Wrapper from '../../../../components/Wrapper';
import PlaceCard from '../PlaceCard';
import { InfoContext } from '../../../../contexts/InfoContext';
import prev from '../../../../assets/prev-galeria.svg';
import next from '../../../../assets/next-galeria.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// * Mudar o nome do componente para RECOMMENDATIONS

function PlacesList() {
  const { cardsRender } = useContext(InfoContext);
  const [swiperProxy, setSwiperProxy] = useState({});

  return (
    <Wrapper mb="2rem">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        centerInsufficientSlides
        breakpoints={{
          606: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSwiper={swiper => setSwiperProxy(swiper)}
      >
        {/* Controladores do carrossel  */}
        <Image
          onClick={() => swiperProxy.slidePrev()}
          position="absolute"
          cursor="pointer"
          color="yellow"
          mt="-1.5rem"
          zIndex={10}
          left="10px"
          src={prev}
          top="50%"
          w="3rem"
        />
        <Image
          onClick={() => swiperProxy.slideNext()}
          position="absolute"
          cursor="pointer"
          mt="-1.5rem"
          right="10px"
          zIndex={10}
          src={next}
          top="50%"
          w="3rem"
        />
        {cardsRender.map(card => (
          <SwiperSlide key={card.name}>
            <PlaceCard place={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}

export default PlacesList;
