import {
    Input,
    FormControl,
    FormLabel,
    AlertIcon,
    AlertTitle,
    FormHelperText,
    Box,
    Alert,
    Spacer,
    Container,
    useMediaQuery,
} from '@chakra-ui/react';
import BasicButton from '../BasicButton';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Muito curto!')
        .max(15, 'Muito longo!')
        .required('Obrigatório'),
    lastName: Yup.string()
        .min(2, 'Muito curto!')
        .max(40, 'Muito longo!')
        .required(),
    email: Yup.string()
        .email('Email invalido!')
        .required('Obrigatório'),
    emailVerf: Yup.string()
        .email('Email invalido!')
        .required('Confirmação obrigatória')
        .oneOf([Yup.ref('email')], 'Use o mesmo endereço de email!'),
    password: Yup.string()
        .required('Obrigatório'),
});

function Register() {

    const [isSmallerThan606] = useMediaQuery('(max-width: 606px)');

    function validateName(value) {
        let error
        if (!value) {
            error = 'Name is required'
        }
        return error
    }

    return (
        <Formik
            validationSchema={SignupSchema}
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                emailVerf: '',
                password: '',
            }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                }, 1000)
            }}
        >
            {(props) => (
                <Container maxW='md'>
                    <Box display="flex" flexWrap="wrap" flexDirection="column" gap={4}>
                        <Form>
                            <Field name='firstName' validate={validateName}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor='firstName'>Nome</FormLabel>
                                        <Input {...field} id='firstName' placeholder='Primeiro nome' type='text' />
                                    </FormControl>
                                )}
                            </Field>

                            <FormControl>
                                <FormLabel htmlFor='lastName'>Sobrenome</FormLabel>
                                <Input id='lastName' placeholder='Último nome' type='text' />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel htmlFor='email'>Email</FormLabel>
                                <Input id='email' placeholder='Seu email' type='email' />
                                <FormHelperText>Seu email não será compartilhado.</FormHelperText>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel htmlFor='emailVerf'>Confirme seu email</FormLabel>
                                <Input id='emailVerf' placeholder='Seu email' type='email' />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel htmlFor='password'>Senha</FormLabel>
                                <Input id='password' placeholder='Sua senha' type='text' />
                            </FormControl>
                        </Form>
                    </Box>
                    <Box display="flex" m={4} gap={1} flexDir={isSmallerThan606 ? 'column' : 'row'}>
                        <BasicButton
                            type="submit"
                            isLoading={props.isSubmitting}
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
            )}
        </Formik>
    )
}
export default Register;