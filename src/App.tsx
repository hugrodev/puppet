import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'
import './App.scss';

function App() {
  return (
    <div className='App'>
      <img className="background-image" src='background.png'></img>
      <Navbar />
      <Home />
    </div>

  );
}

export default App;
