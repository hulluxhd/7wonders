import React from 'react';
import {
  // Input,
  Image, Box,
} from '@chakra-ui/react';

function InputHeader(props) {
  // eslint-disable-next-line react/prop-types
  const {
    // eslint-disable-next-line react/prop-types
    placeholder, image, postop, data, cityToRender, onChosedCityToRender,
  } = props;

  function inputCity(city, onChosedCity, options) {
    // console.log(options);
    return (
      <>
        {/* Chose a city */}
        <div
          style={{
            background: '#FFF',
            placeholder,
            borderRadius: '0.25rem',
            paddingLeft: '43px',
          }}
          name="city"
          id="city"
          value={city}
          onChange={onChosedCity}
          data-testid="city-input"
          className="input"
        >
          {options.map((item) => <p value={item.city}>{item.city}</p>)}
        </div>
        {/* </label>
        <label
          htmlFor="city"
          data-testid="city-input-label"
          className="city-label"
        >
          Chose a city
          <select
            name="city"
            id="city"
            value={city}
            onChange={onChosedCity}
            data-testid="city-input"
            className="input"
          >
            {options.map((item) => <option value={item.city}>{item.city}</option>)}
          </select>
        </label> */}

      </>
    );
  }

  return (

    // eslint-disable-next-line react/jsx-props-no-spreading
    <Box {...props} position="relative">
      {inputCity(cityToRender, onChosedCityToRender, data)}
      <Image
        src={image}
        width="15px"
        position="absolute"
        border-style="none"
        left="16px"
        top={postop || '13px'}
        zIndex={1}
      />
    </Box>
  );
}

export default InputHeader;
