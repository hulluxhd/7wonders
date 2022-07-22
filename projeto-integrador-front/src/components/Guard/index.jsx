import { Box } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoContext } from '../../contexts/InfoContext';

function Guard({ children }) {
    const navigate = useNavigate();

    const localToken = localStorage.getItem('token');

    useEffect(() => {
        if (!localToken) {
            navigate('/register');
        }
    }, [localToken]);

    return (
        <Box>
            {children}
        </Box>
    );
}

export default Guard;
