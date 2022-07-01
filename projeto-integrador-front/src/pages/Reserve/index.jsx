import {
    FormControl,
    Box,
    useMediaQuery,
    Text,
    Select,
    GridItem,
    Grid,
} from '@chakra-ui/react';
import { ArrowUUpLeft } from 'phosphor-react';
import { useContext } from 'react';
import BasicButton from '../../components/BasicButton';
import Calendar from '../../components/Calendar';
import InputHeader from '../../components/Header/components/InputHeader';
import handleInputDateValueController from '../../components/Header/utils/util.handleInputDateValueController';
import { InfoContext } from '../../contexts/InfoContext';
import DetailsCard from './DetailsCard';
import FormReserve from './FormReserve';
import Wrapper from '../../components/Wrapper';
import InfosRules from './InfosRules';

function ReservePage() {
  const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');

  const {
    dateCheckinAndCheckout,
  } = useContext(InfoContext);

  return (
    <>
    <Box
      w="100%"
      h="70px"
      bgColor="var(--hard-blue)"
      color="#FFF"
      display="flex"
      alignItems="center"
      padding="0 2rem"
      justifyContent="space-between"
      position="relative"
      >
          <Box>
              <Text as="h3">Hoteis</Text>
              <Text as="h2">Hotel EAST Miami</Text>
          </Box>
          <Box
            as="button"
            type="button"
            float="right"
            padding="0 0 0 1rem"
          >
              <ArrowUUpLeft size={32} color="#FFF" />
          </Box>
    </Box>
    <Wrapper>
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={{ base: '1', md: '4' }}
          p="1rem"
        >
            <GridItem colSpan={{ base: '5', lg: '3' }}>
                <Text
                  as="h2"
                  color="var(--hard-blue)"
                  fontSize={isSmallerThan606 ? '1.4rem' : '1.75rem'}
                  lineHeight="1.75rem"
                  fontWeight="700"
                  p={isSmallerThan606 ? '1rem 0 0.25rem' : '1rem 0 0.5rem'}
                  mb="2"
                >
                    Insira seus dados
                </Text>
                  <FormReserve />
            </GridItem>
            <GridItem rowSpan={{ base: '0', lg: '3' }} colSpan={{ base: '5', lg: '2' }}>
                <Box
                  padding="4"
                  marginTop="14"
                  borderRadius="lg"
                  bgColor="#fff"
                  shadow="lg"
                  w="100%"
                  h="94%"
                >
                    <Text
                      as="h2"
                      color="var(--hard-blue)"
                      fontSize={isSmallerThan606 ? '1.4rem' : '1.75rem'}
                      lineHeight="1.75rem"
                      fontWeight="700"
                      p={isSmallerThan606 ? '1rem 0 0.25rem' : '1rem 0 0.5rem'}
                      mt="1"
                      mb="2"
                    >
                        Datalhe da reserva
                    </Text>
                    <DetailsCard />
                    <InputHeader
                      value={handleInputDateValueController(dateCheckinAndCheckout)}
                      placeholder="Check in - Check out"
                    />
                    <BasicButton
                      type="submit"
                      description="Reservar"
                      w="100%"
                      my={isSmallerThan606 ? null : '1rem'}
                      transition="all 0.2s ease-in-out"
                      _hover={{
                        background: 'transparent',
                        color: 'var(--hard-blue)',
                        border: '2px solid var(--blue)',
                      }}
                    />
                </Box>
            </GridItem>
            <GridItem colSpan={{ base: '5', lg: '3' }}>
                <Text
                  as="h2"
                  color="var(--hard-blue)"
                  fontSize={isSmallerThan606 ? '1.4rem' : '1.75rem'}
                  lineHeight="1.75rem"
                  fontWeight="700"
                  p={isSmallerThan606 ? '1rem 0 0.25rem' : '1rem 0 0.5rem'}
                  mt="3"
                  mb="2"
                >
                    Selecione sua data de reserva
                </Text>
                <Calendar showDoubleView />
            </GridItem>
            <GridItem colSpan={{ base: '5', lg: '3' }}>
                <Text
                  as="h2"
                  color="var(--hard-blue)"
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
                    <Text
                      color="var(--hard-blue)"
                      fontWeight="bold"
                    >
                        Seu quarto estará pronto para check-in entre 10hs e 23hs
                    </Text>
                    <Text
                      color="var(--hard-blue)"
                      fontSize="small"
                      fontWeight="medium"
                      mt="1"
                    >
                        Indique a sua hora prevista de chegada
                    </Text>
                    <FormControl mt="3">
                        <Select
                          id="hr"
                          placeholder="Selecione a hora de chegada"
                          fontSize="smaller"
                          color="var(--hard-blue)"
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
              <InfosRules />
            </GridItem>
        </Grid>
    </Wrapper>
    </>
  );
}

export default ReservePage;
