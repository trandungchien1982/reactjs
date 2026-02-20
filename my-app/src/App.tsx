import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FC01 from './comps/FC01'
import Greetings from './comps/Greetings'
import MessageCounter from './comps/MessageCounter'
import AuthButton from './comps/AuthButton'

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
      <h1>06. Condition Render</h1>
      <div className="card">
        <h1>Conditional Rendering</h1>

        <h1>Greetings with true/false</h1>
        <Greetings isLoggedIn/>
        <hr />
        <Greetings />

        <h1>MessageCounter</h1>
        <MessageCounter />
        <hr />
        <MessageCounter unreadCount=""/>
        <hr />
        <MessageCounter unreadCount={true}/>
        <hr />
        <MessageCounter unreadCount={20}/>
        <hr />
        <MessageCounter unreadCount="1"/>

        <h1>AuthButton ? : </h1>
        <AuthButton />
        <hr />
        <AuthButton isLoggedIn />
        <hr />
        <AuthButton isLoggedIn={true} />
        <hr />
        <AuthButton isLoggedIn={false} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
