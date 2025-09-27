import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './custom.css'

function MyComponent01() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="comp01">My Component 01</div>
      <div className="comp01_content">Component 01 - Content - Plz plz Plz plz Plz plz Plz plz Plz plz Plz plz Plz plz </div>
    </>
  )
}

export default MyComponent01;
