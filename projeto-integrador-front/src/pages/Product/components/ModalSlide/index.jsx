import React from 'react';

import {
  Box,
} from '@chakra-ui/react';

import {
  Swiper,
  SwiperSlide,
}
// eslint-disable-next-line import/no-unresolved
from 'swiper/react';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css/free-mode';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css/thumbs';

// import required modules
// eslint-disable-next-line import/no-unresolved
import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  A11y
} from 'swiper';

import baseApi from '../../../../services/service.baseApi';

export default function ModalSlide() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      modules={[FreeMode, Navigation, Thumbs, Pagination, A11y]}
      className="mySwiper2"
      pagination={{ type: 'fraction', clickable: true }}
    >
      <SwiperSlide>
        <Box
          bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/a4a65579.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          margin="0 auto"
          height="70vh"
          width="80vw"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Box
          bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/a4a65579.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          margin="0 auto"
          height="70vh"
          width="80vw"
        >
          Slide 1
        </Box>

      </SwiperSlide>
      <SwiperSlide>
        <Box
          bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/a4a65579.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          margin="0 auto"
          height="70vh"
          width="80vw"
        >
          Slide 1
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          bgImage="url('https://images.trvl-media.com/hotels/13000000/12080000/12079000/12078999/a4a65579.jpg?impolicy=resizecrop&rw=1200&ra=fit')"
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          margin="0 auto"
          height="70vh"
          width="80vw"
        >
          Slide 1
        </Box>
      </SwiperSlide>
    </Swiper>
  );
}
