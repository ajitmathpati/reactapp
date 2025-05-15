import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [frame, setvalue] = useState(" ")

  function getdate(e) {

    e.preventDefault()
    alert('in function')
    const value = e.target.nm.value
    setvalue(
      value
    );
    console.log(value);


  }
  return (
    <>
      <h1>welcome!!!</h1>
      <h2>first react js app</h2>
      <form onSubmit={getdate}>


        <input type='text' name='nm' placeholder='Enter the value'></input>
        <br></br>
        <br></br>
        <input type='submit' value='add data'></input>
        <br></br>
        <br></br>
        <h1>add Value is:{frame}</h1>
      </form>
    </>
  );
}

export default App;
