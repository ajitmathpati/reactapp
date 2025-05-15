import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    name: "ajit mathpai",
    age: 20
  }
  let newArr = [1, 2, 3, 4]

  return (
    <>
      <Card />
      <Card myvalue="ajit " btn="submit" />
      <Card myvalue="this is my demo" btn="bhara" />

    </>
  )
}

export default App
