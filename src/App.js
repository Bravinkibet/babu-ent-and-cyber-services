import React from 'react';
import './App.css'; // Import your CSS file if you have one
import BabuEnt from './components/BabuEnt'; // Main component
import OnlineServices from './components/OnlineServices'; // Online services component
import PrintingServices from './components/PrintingServices'; // Printing services component
import MovieServices from './components/MovieServices'; // Movie services component

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
