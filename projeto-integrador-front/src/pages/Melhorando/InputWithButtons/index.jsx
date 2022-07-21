import {
    Flex,
 FormLabel, HStack, Image, Tooltip, VStack
} from '@chakra-ui/react';
import Input from '../Input';
import PlusButton from '../../../assets/plus-button.svg';

function InputWithButtons(props) {
  const {
    inputlabel,
    htmlFor,
    value,
    name,
    id,
    handleplus,
    handleminus,
    onChange,
    onClick,
    tooltipLabel,
    inputlabelWithButtons
  } = props;

  return (
    <Flex alignItems="start" flexDir="column">
      <Tooltip label={tooltipLabel}>
        <FormLabel htmlFor={htmlFor}>{inputlabelWithButtons}</FormLabel>
      </Tooltip>
      <HStack>
        <Input
          inputlabel={inputlabel}
          htmlFor={htmlFor}
          onChange={onChange}
          value={value}
          name={name}
          {...props}
          id={id}
        />
        <VStack minH="100%">
          <Tooltip label="Adicionar">
            <Image
              minW="21.5px"
              maxW="22px"
              src={PlusButton}
              alt="add bed button"
              cursor="pointer"
              onClick={handleplus}
            />
          </Tooltip>
          <Tooltip label="Remover">
            <Image
              minW="21.5px"
              maxW="22px"
              src={PlusButton}
              alt="add bed button"
              cursor="pointer"
              onClick={handleminus}
            />
          </Tooltip>
        </VStack>
      </HStack>
    </Flex>
  );
}

export default InputWithButtons;
