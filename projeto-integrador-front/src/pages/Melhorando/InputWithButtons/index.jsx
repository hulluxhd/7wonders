import {
 HStack, Image, Tooltip, VStack
} from '@chakra-ui/react';
import Input from '../Input';
import PlusButton from '../../../assets/plus-button.svg';

function InputWithButtons(props) {
  const {
 inputlabel, htmlFor, value, name, id, handleplus, handleminus, onChange, onClick, tooltipLabel
} =
    props;

  return (
    <HStack align="end">
      <Input
        inputlabel={inputlabel}
        htmlFor={htmlFor}
        onChange={onChange}
        value={value}
        name={name}
        {...props}
        id={id}
      />
      <VStack>
        <Tooltip label="Adicionar">
          <Image
            w="1.65rem"
            src={PlusButton}
            alt="add bed button"
            cursor="pointer"
            onClick={handleplus}
          />
        </Tooltip>
        <Tooltip label="Remover">
          <Image
            w="1.6rem"
            src={PlusButton}
            alt="add bed button"
            cursor="pointer"
            onClick={handleminus}
          />
        </Tooltip>
      </VStack>
    </HStack>
  );
}

export default InputWithButtons;
