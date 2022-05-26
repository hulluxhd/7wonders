import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Register from './components/Register';
import InfoProvider from './contexts/InfoContext';
import Home from './pages/Home';
import data from './data';

function App() {
  const [toRender] = useState(data);
  const [toRenderOnPage, setToRenderOnPage] = useState(data);
  return (
    <BrowserRouter>
      <InfoProvider>
        <Header data={{ toRender, setToRenderOnPage }} />
        <Routes>
          <Route path="/" element={<Home render={toRenderOnPage} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </InfoProvider>
    </BrowserRouter>
  );
}

export default App;
