import { Box } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoContext } from '../../contexts/InfoContext';

function Guard({ children }) {
    const navigate = useNavigate();

    const { user } = useContext(InfoContext);
    console.log(user);

    useEffect(() => {
        console.log(localStorage.getItem('token'));
        if (!localStorage.getItem('token')) {
            navigate('/register');
        }
    }, []);

    console.log(children);
    return (
        <Box>
            {children}
        </Box>
    );
}

export default Guard;
