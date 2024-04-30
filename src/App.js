import React from 'react';
import './App.css';
import BabuEnt from './components/BabuEnt';
import OnlineServices from './components/OnlineServices';
import PrintingServices from './components/PrintingServices';
import MovieServices from './components/MovieServices';

function App() {
  return (
    <div className="App">
      <BabuEnt />
      <OnlineServices />
      <PrintingServices />
      <MovieServices />
    </div>
  );
}

export default App;
