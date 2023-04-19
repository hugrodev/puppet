import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'
import './App.scss';

function App() {
  return (
    <div className='App'>
        <img className="background-image" src='background.png'></img>
      {/* <Navbar /> */}
      <Home />        
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>

  );
}

export default App;
