import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Accordian></Accordian>
    <RandomColor></RandomColor>
    </>
  )
}

export default App
