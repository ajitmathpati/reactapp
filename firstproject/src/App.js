import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const handleClickFunction = (e) => {
    const body = document.querySelector('body');
    body.style.backgroundColor = getRandomColor();

    const h1 = document.querySelector('h1');
    h1.style.color = colorGenrator();

  };
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let myColor = '#';
    for (let i = 0; i < 6; i++) {
      myColor += letters[Math.floor(Math.random() * 16)];
    }
    return myColor;
  }


  function colorGenrator() {
    const letters = '01234567889ABCDEf';
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
  }


  return (
    <>
      <div className='container'>
        <h1>RANDOM BACKGROUND COLOR CHANGER</h1>
        <button className='btn' onClick={handleClickFunction}>change color</button>

      </div>

    </>
  );
}

export default App;
