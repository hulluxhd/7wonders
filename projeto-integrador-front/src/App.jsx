import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoProvider from './contexts/InfoContext';
import Home from './pages/Home';
import Register from './pages/Register';
import Results from './pages/Results';
import ResultsWithId from './pages/ResultsWithId';
// eslint-disable-next-line import/no-named-as-default
import Product from './pages/Product';
import ReservePage from './pages/Reserve';
import CreateProduct from './pages/CreateProduct';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BrowserRouter>
      <InfoProvider>
        <Header
          drawerFunctions={{
            isOpen,
            onOpen,
            onClose,
          }}
        />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={<Register openDrawer={onOpen} />}
            />
            <Route path="/results" element={<Results />} />
            <Route
              path="/results/:search/:searchId"
              element={<ResultsWithId />}
            />
            <Route
              path="/detail/accommodations/:productId"
              element={<Product />}
            />
            <Route path="/reserve" element={<ReservePage />} />
            <Route path="/register-product" element={<CreateProduct />} />
          </Routes>
        <Footer />
      </InfoProvider>
    </BrowserRouter>
  );
}

export default App;
