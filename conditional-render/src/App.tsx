import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FC01 from './comps/FC01'
import Greetings from './comps/Greetings'

function App() {
  const [count, setCount] = useState(0)
  const [currentPrice, setCurrentPrice] = useState(120);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>Conditional Rendering</h1>
        <FC01 price={currentPrice} year="1000" background="red" updatePrice={(val: number) => {
            console.log(" -- call updatePrice() in parent : " + val);
            setCurrentPrice(val);
        }} />
        <hr />

        <h1>Greetings with true/false</h1>
        <Greetings isLoggedIn/>
        <hr />
        <Greetings />



      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
