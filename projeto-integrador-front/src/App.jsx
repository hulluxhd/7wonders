import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoProvider, { InfoContext } from './contexts/InfoContext';
import Home from './pages/Home';
import Register from './pages/Register';
import Calendly from './components/Calendar';
import Results from './pages/Results';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BrowserRouter>
      <InfoProvider>
        <Header
          data={{
            isOpen,
            onOpen,
            onClose,
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register openDrawer={onOpen} />} />
          <Route path="/results" element={<Results />} />
          <Route path="/calendar" element={<Calendly />} />
        </Routes>
        <Footer />
      </InfoProvider>
    </BrowserRouter>
  );
}

export default App;
