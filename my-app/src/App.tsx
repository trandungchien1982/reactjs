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
      <h1>09.Composition-CustomHooks</h1>
      <div className="card">
        <h2>React-Roadmap (09.Composition - Custom Hooks) - layout </h2>
        <a target="_blank" href="https://tuyendung.evotek.vn/ket-hop-component-trong-react-tai-su-dung-that-de-dang-react-roadmap/">https://tuyendung.evotek.vn/ket-hop-component-trong-react-tai-su-dung-that-de-dang-react-roadmap/</a>
      </div>
      <div>
          <h2>Ứng dụng sử dụng Custom Hooks - useToggle</h2>
          <ToggleButton />
          <br /><br /> {/* Thêm khoảng cách */}
          <AnotherComponent />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
