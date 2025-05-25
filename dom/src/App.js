import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState(' ');
  function getData(e) {
    e.preventDefault();
    alert('In Function')
   const  InputName = e.target.nm.value;
    setName(
      InputName
    );



  }


  return (

    <>
      <form onSubmit={getData}>
        <input type='text' placeholder='enter your name' name='nm' />
        <br></br><br></br>
        <input type='submit' value='ADD DATA'></input>

        <h1>My Name is: {name}</h1>
      </form>

    </>
  );
}

export default App;
