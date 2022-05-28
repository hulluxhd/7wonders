import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';
import Register from './components/Register';
import InfoProvider from './contexts/InfoContext';
import Home from './pages/Home';
import localData from './data';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [toRenderOnPage, setToRenderOnPage] = useState(localData);
  const [cardsRender, setCardsRender] = useState(toRenderOnPage);
  console.log(cardsRender);
  return (
    <BrowserRouter>
      <InfoProvider>
        <Header
          data={
            {
            toRenderOnPage,
            setToRenderOnPage,
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
        </Routes>
        <Footer />
      </InfoProvider>
    </BrowserRouter>
  );
}

export default App;
