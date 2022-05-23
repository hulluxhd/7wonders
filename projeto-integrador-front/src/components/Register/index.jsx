import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Button,
    Spacer,
    Container,
    useMediaQuery,
} from '@chakra-ui/react';
import BasicButton from '../BasicButton';
import { Formik } from 'formik';

function Register() {
    const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');

    return (
        <Container maxW='md'>
            <Box display="flex" flexWrap="wrap" flexDirection="column" gap={4}>
                <FormControl isRequired>
                    <FormLabel htmlFor='first-name'>Nome</FormLabel>
                    <Input id='first-name' placeholder='Primeiro nome' type='text' />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='last name'>Sobrenome</FormLabel>
                    <Input id='last name' placeholder='Último nome' type='text' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input id='email' placeholder='Seu email' type='email' />
                    <FormHelperText>Seu email não será compartilhado.</FormHelperText>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='email'>Confirme seu email</FormLabel>
                    <Input id='email' placeholder='Seu email' type='email' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='password'>Senha</FormLabel>
                    <Input
                        id='password' placeholder='Sua senha' type='text' />
                </FormControl>
            </Box>
            <Box display="flex" m={4} gap={1} flexDir={isSmallerThan606 ? 'column' : 'row'}>
                <BasicButton
                    description="Registrar"
                    w={isSmallerThan606 ? '80%' : '30%'}
                    ml={isSmallerThan606 ? null : '1rem'}
                    transition="all 0.2s ease-in-out"
                    _hover={{
                        background: 'var(--light-blue)',
                        border: '2px solid var(--blue)',
                    }}
                />
                <Spacer />
                <BasicButton
                    description="Entrar"
                    w={isSmallerThan606 ? '80%' : '30%'}
                    ml={isSmallerThan606 ? null : '1rem'}
                    transition="all 0.2s ease-in-out"
                    _hover={{
                        background: 'var(--light-blue)',
                        border: '2px solid var(--blue)',
                    }}
                />
            </Box>
        </Container>
    )
}
export default Register;