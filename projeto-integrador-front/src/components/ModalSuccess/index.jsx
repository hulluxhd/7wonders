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
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import success from '../../assets/success.png';

function ModalSuccess({ msg }) {
    const navigate = useNavigate();

    return (
        <ModalContent
          minW="45vw"
        >
            <ModalCloseButton />
            <ModalBody flexDirection="column" display="flex">
                <Box display="flex" justifyContent="center" paddingTop="20px" paddingBottom="20px">
                    <Image maxW="20" src={success} />
                </Box>
                <Text fontWeight="700" color="#3f0d0c" fontSize="22px" display="flex" justifyContent="center">
                    Muito obrigado!
                </Text>
                <Text fontWeight="700" fontSize="20px" display="flex" justifyContent="center">
                    {msg}
                </Text>
            </ModalBody>
            <ModalFooter display="flex" justifyContent="center">
                <Button width="230px" backgroundColor="#3f0d0c" color="#fff" mb="25px" onClick={() => navigate('/')}>
                    Ok
                </Button>
            </ModalFooter>
        </ModalContent>
    );
}

export default ModalSuccess;
