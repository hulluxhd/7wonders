import React, { useState } from 'react';
// import { Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoProvider from './contexts/InfoContext';
import Home from './pages/Home';
import data from './data';

function App() {
  const [toRender, setToRender] = useState(data);

  return (
    <BrowserRouter>
      <InfoProvider>
        <Header
          toRender={[toRender, setToRender]}
        />
        {/* <Box as="h1">Lets look</Box> */}
        <Routes>
          <Route path="/" element={<Home toRender={toRender} />} />
        </Routes>
        <Footer />
      </InfoProvider>
    </BrowserRouter>
  );
}

export default App;
