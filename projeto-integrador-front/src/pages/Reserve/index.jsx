import {
  FormControl,
  Box,
  useMediaQuery,
  Text,
  Select,
  GridItem,
  Grid,
  useDisclosure,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import yup from 'yup';
import { useParams } from 'react-router-dom';
import BasicButton from '../../components/BasicButton';
import Calendar from '../../components/Calendar';
import InputHeader from '../../components/Header/components/InputHeader';
import handleInputDateValueController from '../../components/Header/utils/util.handleInputDateValueController';
import { InfoContext } from '../../contexts/InfoContext';
import DetailsCard from './DetailsCard';
import FormReserve from './FormReserve';
import Wrapper from '../../components/Wrapper';
import InfosRules from './InfosRules';
import MoreInfo from '../Product/components/MoreInfo';
import DetailPageHeader from '../Product/components/DetailPageHeader';
import baseApi from '../../services/service.baseApi';
import url from '../../services/urls';

function ReservePage() {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');

  const { dateCheckinAndCheckout } = useContext(InfoContext);
  const { searchId } = useParams();
  const [product, setProduct] = useState({});

  function dates(date) {
    if (date) {
      const [checkin, checkout] = dateCheckinAndCheckout;
      return [checkin, checkout];
    }

    return ['teste'];
  }

  useEffect(() => {
    try {
      baseApi.get(`${url.ACCOMODDATION}/${searchId}`).then(({ data }) => {
        setProduct(data);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  console.log(product);

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [error, setError] = useState('');
  const [dados, setDados] = useState({});

  console.log(dates()[0]);

  function reserveSumit() {
    console.log('Reservado!');
  }

  function validadeData() {
    if (!first) return setError('Campo obrigatório');
    if (!second) return setError('Campo obrigatório');
    setError('');
    reserveSumit();
    return console.log('return');
  }

  console.log(first, second);
  return (
    <>
      <DetailPageHeader />
      <Wrapper>
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={{ base: '2', md: '4' }}
          p="1rem"
          color="#3F0D0C"
        >
          <GridItem colSpan={{ base: '5', lg: '3' }}>
            <Text
              as="h2"
              fontSize={isSmallerThan606 ? '1.4rem' : '1.75rem'}
              lineHeight="1.75rem"
              fontWeight="700"
              p={isSmallerThan606 ? '1rem 0 0.25rem' : '1rem 0 0.5rem'}
              mb="2"
            >
              Insira seus dados
            </Text>
            <FormReserve dados={dados} />
          </GridItem>
          <GridItem
            colSpan={{ base: '5', lg: '2' }}
            rowStart={{ base: '4', lg: '0' }}
            rowSpan={{ base: '0', lg: '3' }}
          >
            <Box
              padding="4"
              marginTop={isSmallerThan606 ? '0' : '14'}
              borderRadius="lg"
              bgColor="#fff"
              shadow="lg"
              w="100%"
            >
              <Text
                as="h2"
                fontSize={isSmallerThan606 ? '1.4rem' : '1.75rem'}
                lineHeight="1.75rem"
                fontWeight="700"
                p={isSmallerThan606 ? '1rem 0 0.25rem' : '1rem 0 0.5rem'}
                mt="1"
                mb="2"
              >
                Detalhe da reserva
              </Text>
              <DetailsCard product={product} />
              <InputHeader
                value={handleInputDateValueController(dateCheckinAndCheckout)}
                placeholder="Check in"
                _readOnly
                cursor="pointer"
              />
              <InputHeader
                onChange={() => setSecond('teste')}
                value={handleInputDateValueController(dateCheckinAndCheckout)}
                placeholder="Check out"
                _readOnly
                cursor="pointer"
              />
              {error && <Text>{error}</Text>}
              <BasicButton
                onClick={() => {
                  validadeData();
                  setFirst('teste');
                  setSecond('teste');
                }}
                type="submit"
                description="Reservar"
                w="100%"
                my="1rem"
                transition="all 0.2s ease-in-out"
                border="none"
              />
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: '5', lg: '3' }}>
            <Text
              as="h2"
              fontSize={isSmallerThan606 ? '1.4rem' : '1.75rem'}
              lineHeight="1.75rem"
              fontWeight="700"
              p={isSmallerThan606 ? '1rem 0 0.25rem' : '1rem 0 0.5rem'}
              mt="3"
              mb="2"
            >
              Selecione sua data de reserva
            </Text>
            <Calendar showDoubleView={!isSmallerThan606} />
          </GridItem>
          <GridItem colSpan={{ base: '5', lg: '3' }}>
            <Text
              as="h2"
              fontSize={isSmallerThan606 ? '1.4rem' : '1.75rem'}
              lineHeight="1.75rem"
              fontWeight="700"
              p={isSmallerThan606 ? '1rem 0 0.25rem' : '1rem 0 0.5rem'}
              mt="3"
              mb="2"
            >
              Seu horário de chegada
            </Text>
            <Box
              padding="4"
              pt={{ base: '1', md: '4' }}
              borderRadius="lg"
              bgColor="#fff"
              shadow="lg"
              h="32"
            >
              <Text fontWeight="bold">
                Seu quarto estará pronto para check-in entre 10hs e 23hs
              </Text>
              <Text fontSize="small" fontWeight="medium" mt="1">
                Indique a sua hora prevista de chegada
              </Text>
              <FormControl mt="3">
                <Select
                  id="hr"
                  placeholder="Selecione a hora de chegada"
                  fontSize="smaller"
                >
                  <option>10:00 - 11:00</option>
                  <option>11:00 - 12:00</option>
                  <option>12:00 - 13:00</option>
                  <option>13:00 - 14:00</option>
                  <option>14:00 - 15:00</option>
                  <option>15:00 - 16:00</option>
                  <option>16:00 - 17:00</option>
                  <option>17:00 - 18:00</option>
                  <option>18:00 - 19:00</option>
                  <option>19:00 - 20:00</option>
                  <option>20:00 - 21:00</option>
                  <option>21:00 - 22:00</option>
                  <option>22:00 - 23:00</option>
                </Select>
              </FormControl>
            </Box>
          </GridItem>
          <GridItem colSpan={5}>
            <MoreInfo />
          </GridItem>
        </Grid>
      </Wrapper>
    </>
  );
}

export default ReservePage;
