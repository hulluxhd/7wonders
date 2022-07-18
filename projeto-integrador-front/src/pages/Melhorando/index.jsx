// eslint-disable-next-line object-curly-newline
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  useRadioGroup,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import Wrapper from '../../components/Wrapper';
import CustomRadio from './CustomRadio';
import options from './options.customradio';

function Melhorando() {
  function handleChange(sh) {
    console.log(sh);
  }
  const {
 value, getRadioProps, getRootProps, setValue
} = useRadioGroup({
    name: 'categories',
    defaultValue: 'Piscina',
  });
  console.log(getRadioProps());
  console.log(value);
  console.log(setValue);

  return (
    <Wrapper>
      <Formik
        initialValues={{
          description: '',
          productName: '',
          safetyRules: '',
          imageCategory: '',
          imageURL: '',
          houseRules: '',
          attributes: [],
          policies: '',
          category: 'default',
          images: [],
          price: '',
          street: '',
          adressNumber: '',
          zipcode: '',
          state: '',
          country: '',
          rooms: '',
          beds: '',
          guests: '',
          city: 'default',
        }}
        onSubmit={async values => {
          console.log(
            JSON.stringify(
              { ...values, attributes: selectedAttributesName },
              false,
              2
            )
          );
        }}
      >
        {formik => (
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }}>
            <GridItem margin="0 auto" h="80vh">
              <Image
                h="100%"
                objectFit="cover"
                src="https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg"
              />
            </GridItem>
            <GridItem h="80vh">
              <Flex direction="column">
                <Text as="h2">Imagens</Text>
                <HStack {...getRootProps()}>
                  {options.map(option => {
                    const radio = getRadioProps({ value: option.category });
                    console.log(radio);
                    return (
                      <CustomRadio
                        key={option.category}
                        image={option.img}
                        {...radio}
                      />
                    );
                  })}
                </HStack>
              </Flex>
            </GridItem>
          </Grid>
        )}
      </Formik>
    </Wrapper>
  );
}

export default Melhorando;
