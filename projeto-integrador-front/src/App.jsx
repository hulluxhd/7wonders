import React from 'react';
import './App.css';
import PlacesLibrary from './components/PlacesLibrary';
import data from './data';

function App() {
  return (
    <PlacesLibrary places={data} />

  );
}

export default App;
