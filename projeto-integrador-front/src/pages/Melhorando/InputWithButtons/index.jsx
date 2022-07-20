import {
 HStack, Image, Tooltip, VStack
} from '@chakra-ui/react';
import Input from '../Input';
import PlusButton from '../../../assets/plus-button.svg';

function InputWithButtons(props) {
  const {
 inputlabel, htmlFor, value, name, id, onClickPlus, onClickMinus, onChange
} =
    props;
  return (
    <HStack align="end">
      <Input
        inputlabel={inputlabel}
        onChange={onChange}
        htmlFor={htmlFor}
        value={value}
        name={name}
        {...props}
        readOnly
        id={id}
      />
      <VStack>
        <Tooltip label="Adicionar">
          <Image
            w="1.65rem"
            src={PlusButton}
            alt="add bed button"
            cursor="pointer"
            onClick={onClickPlus}
          />
        </Tooltip>
        <Tooltip label="Remover">
          <Image
            w="1.6rem"
            src={PlusButton}
            alt="add bed button"
            cursor="pointer"
            onClick={onClickMinus}
          />
        </Tooltip>
      </VStack>
    </HStack>
  );
}

export default InputWithButtons;
