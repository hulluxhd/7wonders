import { Box } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoContext } from '../../contexts/InfoContext';

function Guard({ children }) {
    const navigate = useNavigate();

    const { user: { token } } = useContext(InfoContext);
    console.log(token);

    useEffect(() => {
        if (!token) {
            navigate('/register');
        }
    }, [token]);

    console.log(children);
    return (
        <Box>
            {children}
        </Box>
    );
}

export default Guard;
