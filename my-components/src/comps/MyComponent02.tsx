import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './custom.css'

function MyComponent02() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="comp02">Nội dung thứ hai</div>
      <div className="comp02_content">Component 02 - HDMI, go go go go go go  go go go  go go go  go go go  go go go   </div>
    </>
  )
}

export default MyComponent02;
