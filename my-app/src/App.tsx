import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FC01 from './comps/FC01'
import useToggle from './comps/utils'
import ToggleButton from './comps/ToggleButton'
import AnotherComponent from './comps/AnotherComponent'

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

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
      <h1>10.Component-LifeCycle-Mouting</h1>
      <div className="card">
        <h2>React-Roadmap (10.Component-LifeCycle-Mouting) - rendering </h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/vong-doi-component-trong-react-tu-khoi-tao-den-ket-thuc-react-roadmap/#Vong_Doi_Component_trong_React_la_gi">https://tuyendung.evotek.vn/vong-doi-component-trong-react-tu-khoi-tao-den-ket-thuc-react-roadmap/#Vong_Doi_Component_trong_React_la_gi</a>
      </div>
      <div>
          <h2>Giai Đoạn 1: Mounting (Khởi Tạo)</h2>
          <p>...</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
