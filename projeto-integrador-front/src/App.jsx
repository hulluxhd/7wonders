import { Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoProvider from './contexts/InfoContext';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <InfoProvider>
          <Header />
          <Box as="h1" >Lets look</Box>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </InfoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
