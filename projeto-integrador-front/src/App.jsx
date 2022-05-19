import React from 'react';
import './App.css';
import PlacesList from './components/PlacesList';
import data from './data';

function App() {
  return (
    <PlacesList placeList={data} />

  );
}

export default App;
