import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoProvider from './contexts/InfoContext';
import Home from './pages/Home';
import localData from './data';
import Register from './pages/Register';
import Product from './pages/Product/index';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [toRenderOnDropdown, setToRenderOnDropdown] = useState(localData);
  const [cardsRender, setCardsRender] = useState(toRenderOnDropdown);
  return (
    <BrowserRouter>
      <InfoProvider>
        <Header
          data={
            {
            toRenderOnDropdown,
            setToRenderOnDropdown,
            setCardsRender,
            localData,
            isOpen,
            onOpen,
            onClose
          }
          }
        />
        <Routes>
          <Route path="/" element={<Home render={cardsRender} />} />
          <Route path="/register" element={<Register openDrawer={onOpen} />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </InfoProvider>
    </BrowserRouter>
  );
}

export default App;
