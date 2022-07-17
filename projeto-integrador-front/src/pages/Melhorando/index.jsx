import { Box } from '@chakra-ui/react';
import { Formik } from 'formik';
import Wrapper from '../../components/Wrapper';

function Melhorando() {
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
        {formik => <Box>Teste</Box>}
      </Formik>
    </Wrapper>
  );
}

export default Melhorando;
