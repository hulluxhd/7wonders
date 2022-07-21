import React from 'react';
import {
  useLocation,
  withRouter,
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoProvider from './contexts/InfoContext';
import Home from './pages/Home';
import Register from './pages/Register';
import Results from './pages/Results';
import ResultsWithId from './pages/ResultsWithId';
import Product from './pages/Product';
import ReservePage from './pages/Reserve';
import CreateProduct from './pages/CreateProduct';
import Guard from './components/Guard';
import Melhorando from './pages/Melhorando';

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
          <Route path="/register" element={<Register openDrawer={onOpen} />} />
          <Route path="/results" element={<Results />} />
          <Route
            path="/results/:search/:searchId"
            element={<ResultsWithId />}
          />
          <Route
            path="/detail/accommodations/:searchId"
            element={<Product />}
          />
          <Route
            path="/reserve/accommodations/:searchId"
            element={(
              <Guard>
                <ReservePage />
              </Guard>
            )}
          />
          <Route
            path="/register-product"
            element={(
              <Guard>
                <Melhorando />
              </Guard>
            )}
          />
          <Route path="/melhora-essa-porra" element={<Melhorando />} />
        </Routes>
        <Footer />
      </InfoProvider>
    </BrowserRouter>
  );
}

export default App;
