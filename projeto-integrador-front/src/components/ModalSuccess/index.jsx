import React from 'react';
import {
  Image,
  Box,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import success from '../../assets/success.png';
import BasicButton from '../BasicButton';

function ModalSuccess({ msg, open }) {
  const navigate = useNavigate();
  const { onClose } = useDisclosure();

  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalContent minW="45vw">
        <ModalBody flexDirection="column" display="flex">
          <Box
            justifyContent="center"
            paddingBottom="20px"
            paddingTop="20px"
            display="flex"
          >
            <Image maxW="20" src={success} />
          </Box>
          <Text
            justifyContent="center"
            fontWeight="700"
            color="#3f0d0c"
            fontSize="22px"
            display="flex"
          >
            Muito obrigado!
          </Text>
          <Text
            justifyContent="center"
            fontWeight="700"
            fontSize="20px"
            display="flex"
          >
            {msg}
          </Text>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="center">
          <BasicButton
            onClick={() => {
              onClose();
              navigate('/');
            }}
            w="200px"
            backgroundColor="#3f0d0c"
            description="Continuar"
            color="#fff"
            mb="25px"
          >
            Ok
          </BasicButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalSuccess;
